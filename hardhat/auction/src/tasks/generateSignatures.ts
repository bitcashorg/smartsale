import fs from 'fs'

import 'hardhat-deploy'
import '@nomiclabs/hardhat-ethers'
import axios from 'axios'
import { task } from 'hardhat/config'

import {
  domain,
  getAllowListOffChainManagedContract,
  getEhtersSigners,
  getNetworkName,
} from './utils'

export const generateSignatures: () => void = () => {
  task(
    'generateSignatures',
    'Generates the signatures for the allowListManager',
  )
    .addParam('auctionId', 'Id of the auction ')
    .addParam(
      'fileWithAddress',
      'File with comma separated addresses that should be allow-listed',
    )
    .addFlag(
      'postToApi',
      'Flag that indicates whether the signatures should be sent directly to the api',
    )
    .addFlag(
      'postToDevApi',
      'Flag that indicates whether the signatures should be sent directly to the api in development environment',
    )
    .setAction(async (taskArgs, hardhatRuntime) => {
      const [caller] = await getEhtersSigners(hardhatRuntime)
      console.log(`Using the account: ${caller.address}`)

      // Loading dependencies
      const allowListContract =
        await getAllowListOffChainManagedContract(hardhatRuntime)
      const { chainId } = await hardhatRuntime.ethers.provider.getNetwork()
      const contractDomain = domain(chainId, allowListContract.address)

      // Creating signatures folder to store signatures:
      const dir = './signatures'
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {
          recursive: true,
        })
      }

      // Read signatures from provided file
      const file = fs.readFileSync(taskArgs.fileWithAddress, 'utf8')
      const addresses = file.split(',').map((address) => address.trim())

      // Post signatures in packages of `signaturePackageSize` to the api and write
      // them into the file `signatures-ith.json`
      const signaturePackageSize = 10.0
      for (let i = 0; i < addresses.length / signaturePackageSize; i++) {
        const signatures = []
        console.log('Creating signatures for the ', i, '-th package')
        for (const address of addresses.slice(
          i * signaturePackageSize,
          (i + 1) * signaturePackageSize,
        )) {
          const auctioneerMessage = hardhatRuntime.ethers.utils.keccak256(
            hardhatRuntime.ethers.utils.defaultAbiCoder.encode(
              ['bytes32', 'address', 'uint256'],
              [
                hardhatRuntime.ethers.utils._TypedDataEncoder.hashDomain(
                  contractDomain,
                ),
                address,
                taskArgs.auctionId,
              ],
            ),
          )
          const auctioneerSignature = await caller.signMessage(
            hardhatRuntime.ethers.utils.arrayify(auctioneerMessage),
          )
          const sig =
            hardhatRuntime.ethers.utils.splitSignature(auctioneerSignature)
          const auctioneerSignatureEncoded =
            hardhatRuntime.ethers.utils.defaultAbiCoder.encode(
              ['uint8', 'bytes32', 'bytes32'],
              [sig.v, sig.r, sig.s],
            )
          signatures.push({
            user: address,
            signature: auctioneerSignatureEncoded,
          })
        }
        const json = JSON.stringify({
          auctionId: Number(taskArgs.auctionId),
          chainId: chainId,
          allowListContract: allowListContract.address,
          signatures: signatures,
        })

        // Writing signatures into file
        fs.writeFileSync(`signatures/signatures-${i}.json`, json, 'utf8')

        // Posting to the Dev-API endpoint
        if (taskArgs.postToDevApi) {
          const apiResult = await axios.post(
            `https://ido-v1-api-${await getNetworkName(
              hardhatRuntime,
            )}.dev.gnosisdev.com/api/v1/provide_signature`,
            json,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            },
          )
          console.log('Api returned: ', apiResult.data)
        }
        // Posting to the API endpoint
        if (taskArgs.postToApi) {
          const apiResult = await axios.post(
            `https://ido-api-${await getNetworkName(
              hardhatRuntime,
            )}.gnosis.io/api/v1/provide_signature`,
            json,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            },
          )
          console.log('Dev-Api returned: ', apiResult.data)
        }
      }
    })
}
