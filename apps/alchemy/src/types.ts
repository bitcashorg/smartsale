export interface AlchemyWebhookEvent {
  webhookId: string
  id: string
  createdAt: Date
  type: AlchemyWebhookType
  event: Record<any, any>
}

export type AlchemyWebhookType =
  | 'MINED_TRANSACTION'
  | 'DROPPED_TRANSACTION'
  | 'ADDRESS_ACTIVITY'

//   {
//     "webhookId": "wh_s4jwyyp1291ffua0",
//     "id": "whevt_ulgdrcxq4db72zgn",
//     "createdAt": "2024-08-23T05:27:14.931405209Z",
//     "type": "ADDRESS_ACTIVITY",
//     "event": {
//       "network": "MATIC_MAINNET",
//       "activity": [
//         {
//           "fromAddress": "0x0000000000000000000000000000000000000000",
//           "toAddress": "0x51bbd64ee99038580481df9605bff93a5921e238",
//           "blockNum": "0x19d7421",
//           "hash": "0xac39defc17c7a268b33cc4b8df9a232fad4b9a0a28f1d446bbcca04619ba13d1",
//           "erc1155Metadata": [
//             {
//               "tokenId": "0xcf",
//               "value": "0x1bc16d674ec800000"
//             },
//             {
//               "tokenId": "0x1f7",
//               "value": "0x1"
//             },
//             {
//               "tokenId": "0x259",
//               "value": "0x4563918244f40000"
//             },
//             {
//               "tokenId": "0x6a",
//               "value": "0x1bc16d674ec80000"
//             },
//             {
//               "tokenId": "0x6b",
//               "value": "0x3782dace9d900000"
//             }
//           ],
//           "category": "erc1155",
//           "rawContract": {
//             "rawValue": "0x00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000cf00000000000000000000000000000000000000000000000000000000000001f70000000000000000000000000000000000000000000000000000000000000259000000000000000000000000000000000000000000000000000000000000006a000000000000000000000000000000000000000000000000000000000000006b0000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000001bc16d674ec80000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000004563918244f400000000000000000000000000000000000000000000000000001bc16d674ec800000000000000000000000000000000000000000000000000003782dace9d900000",
//             "address": "0x22d5f9b75c524fec1d6619787e582644cd4d7422"
//           },
//           "log": {
//             "address": "0x22d5f9b75c524fec1d6619787e582644cd4d7422",
//             "topics": [
//               "0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb",
//               "0x000000000000000000000000070717e1bc4c6e46c22b0e0b8821e0ac1d4689c3",
//               "0x0000000000000000000000000000000000000000000000000000000000000000",
//               "0x00000000000000000000000051bbd64ee99038580481df9605bff93a5921e238"
//             ],
//             "data": "0x00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000cf00000000000000000000000000000000000000000000000000000000000001f70000000000000000000000000000000000000000000000000000000000000259000000000000000000000000000000000000000000000000000000000000006a000000000000000000000000000000000000000000000000000000000000006b0000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000001bc16d674ec80000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000004563918244f400000000000000000000000000000000000000000000000000001bc16d674ec800000000000000000000000000000000000000000000000000003782dace9d900000",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0xac39defc17c7a268b33cc4b8df9a232fad4b9a0a28f1d446bbcca04619ba13d1",
//             "transactionIndex": "0x26",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x10e",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x13ededc25bca247250b93c6eab0291c44273ceb1",
//           "toAddress": "0x0000000000000000000000000000000000000000",
//           "blockNum": "0x19d7421",
//           "hash": "0x3b23a37c645fc12f5e927fc9c60efa5c47b177d400d132f782af265543d9dfa8",
//           "value": 140316,
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x000000000000000000000000000000000000000000000000000000000002241c",
//             "address": "0xd051605e07c2b526ed9406a555601aa4db8490d9"
//           },
//           "log": {
//             "address": "0xd051605e07c2b526ed9406a555601aa4db8490d9",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x00000000000000000000000013ededc25bca247250b93c6eab0291c44273ceb1",
//               "0x0000000000000000000000000000000000000000000000000000000000000000"
//             ],
//             "data": "0x000000000000000000000000000000000000000000000000000000000002241c",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0x3b23a37c645fc12f5e927fc9c60efa5c47b177d400d132f782af265543d9dfa8",
//             "transactionIndex": "0x9",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x53",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x0000000000000000000000000000000000000000",
//           "toAddress": "0xb7f575de9deac0180dfbb9020f42a19ad6a2c0dd",
//           "blockNum": "0x19d7421",
//           "hash": "0x9bb3e15d782f912bb76a5ea04f21c6a203d429b63ad939adcaf305c9303dbb02",
//           "value": 4.0114719726714655e+21,
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x0000000000000000000000000000000000000000000000d9765b59748e33b0af",
//             "address": "0x59e8e9100cbfcbcbadf86b9279fa61526bbb8765"
//           },
//           "log": {
//             "address": "0x59e8e9100cbfcbcbadf86b9279fa61526bbb8765",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x0000000000000000000000000000000000000000000000000000000000000000",
//               "0x000000000000000000000000b7f575de9deac0180dfbb9020f42a19ad6a2c0dd"
//             ],
//             "data": "0x0000000000000000000000000000000000000000000000d9765b59748e33b0af",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0x9bb3e15d782f912bb76a5ea04f21c6a203d429b63ad939adcaf305c9303dbb02",
//             "transactionIndex": "0x3",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x1b",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x45ed97bbee5398e3d11d0c21b8c5768486feed10",
//           "toAddress": "0xf715beb51ec8f63317d66f491e37e7bb048fcc2d",
//           "blockNum": "0x19d7421",
//           "hash": "0xbe50d0bf34074b35f6ff85ad6c975a4dc1c1ef14f05b60dedc6315bc756689fe",
//           "value": 0.0010625,
//           "asset": "WETH",
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x0000000000000000000000000000000000000000000000000003c6568f12e800",
//             "address": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
//             "decimals": 18
//           },
//           "log": {
//             "address": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x00000000000000000000000045ed97bbee5398e3d11d0c21b8c5768486feed10",
//               "0x000000000000000000000000f715beb51ec8f63317d66f491e37e7bb048fcc2d"
//             ],
//             "data": "0x0000000000000000000000000000000000000000000000000003c6568f12e800",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0xbe50d0bf34074b35f6ff85ad6c975a4dc1c1ef14f05b60dedc6315bc756689fe",
//             "transactionIndex": "0x8",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x35",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x0000000000000000000000000000000000000000",
//           "toAddress": "0x7734280a4337f37fbf4651073db7c28c80b339e9",
//           "blockNum": "0x19d7421",
//           "hash": "0x9bb3e15d782f912bb76a5ea04f21c6a203d429b63ad939adcaf305c9303dbb02",
//           "value": 202049,
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x0000000000000000000000000000000000000000000000000000000000031541",
//             "address": "0x1a13f4ca1d028320a707d99520abfefca3998b7f"
//           },
//           "log": {
//             "address": "0x1a13f4ca1d028320a707d99520abfefca3998b7f",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x0000000000000000000000000000000000000000000000000000000000000000",
//               "0x0000000000000000000000007734280a4337f37fbf4651073db7c28c80b339e9"
//             ],
//             "data": "0x0000000000000000000000000000000000000000000000000000000000031541",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0x9bb3e15d782f912bb76a5ea04f21c6a203d429b63ad939adcaf305c9303dbb02",
//             "transactionIndex": "0x3",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x11",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x0000000000000000000000000000000000000000",
//           "toAddress": "0x24f2520eff6105fcc22a9c18aaa6ed7f6e44a47f",
//           "blockNum": "0x19d7421",
//           "hash": "0x758b1fb3c9c6565af0bb9f3b51025bbc2c60f7f57f7e62a820488a2af0b147b1",
//           "erc721TokenId": "0x131",
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x",
//             "address": "0xf2301d1a9f7b332921bf7127cdac684b53fa43c2"
//           },
//           "log": {
//             "address": "0xf2301d1a9f7b332921bf7127cdac684b53fa43c2",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x0000000000000000000000000000000000000000000000000000000000000000",
//               "0x00000000000000000000000024f2520eff6105fcc22a9c18aaa6ed7f6e44a47f",
//               "0x0000000000000000000000000000000000000000000000000000000000000131"
//             ],
//             "data": "0x",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0x758b1fb3c9c6565af0bb9f3b51025bbc2c60f7f57f7e62a820488a2af0b147b1",
//             "transactionIndex": "0x2a",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x12f",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0xc765eca0ad3fd27779d36d18e32552bd7e26fd7b",
//           "toAddress": "0x1111111254fb6c44bac0bed2854e76f90643097d",
//           "blockNum": "0x19d7421",
//           "hash": "0x08696572e9133c90c9bb31b30c8660caaf08288e31b1395148d837793bc7c2ba",
//           "value": 555712363075697400,
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x00000000000000000000000000000000000000000000000007b649732e6b7afb",
//             "address": "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7"
//           },
//           "log": {
//             "address": "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x000000000000000000000000c765eca0ad3fd27779d36d18e32552bd7e26fd7b",
//               "0x0000000000000000000000001111111254fb6c44bac0bed2854e76f90643097d"
//             ],
//             "data": "0x00000000000000000000000000000000000000000000000007b649732e6b7afb",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0x08696572e9133c90c9bb31b30c8660caaf08288e31b1395148d837793bc7c2ba",
//             "transactionIndex": "0x37",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x16c",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x0000000000000000000000000000000000000000",
//           "toAddress": "0x8c3cffc0d194cee0dc4170834d8705099cd51505",
//           "blockNum": "0x19d7421",
//           "hash": "0xcb077234fb8ae0036db65295e80b9bcd1a71489f3bc8a1a590fcd3d5f89564ae",
//           "erc721TokenId": "0x95",
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x",
//             "address": "0x69c941715e514c46f6c10e20be0961523652d1f4"
//           },
//           "log": {
//             "address": "0x69c941715e514c46f6c10e20be0961523652d1f4",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x0000000000000000000000000000000000000000000000000000000000000000",
//               "0x0000000000000000000000008c3cffc0d194cee0dc4170834d8705099cd51505",
//               "0x0000000000000000000000000000000000000000000000000000000000000095"
//             ],
//             "data": "0x",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0xcb077234fb8ae0036db65295e80b9bcd1a71489f3bc8a1a590fcd3d5f89564ae",
//             "transactionIndex": "0x2e",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x14b",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x0000000000000000000000000000000000000000",
//           "toAddress": "0x80ff4e4153883d770204607eb4af9994739c72dc",
//           "blockNum": "0x19d7421",
//           "hash": "0x3b23a37c645fc12f5e927fc9c60efa5c47b177d400d132f782af265543d9dfa8",
//           "value": 57072197,
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x000000000000000000000000000000000000000000000000000000000366da45",
//             "address": "0xee3b4ce32a6229ae15903cda0a5da92e739685f7"
//           },
//           "log": {
//             "address": "0xee3b4ce32a6229ae15903cda0a5da92e739685f7",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x0000000000000000000000000000000000000000000000000000000000000000",
//               "0x00000000000000000000000080ff4e4153883d770204607eb4af9994739c72dc"
//             ],
//             "data": "0x000000000000000000000000000000000000000000000000000000000366da45",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0x3b23a37c645fc12f5e927fc9c60efa5c47b177d400d132f782af265543d9dfa8",
//             "transactionIndex": "0x9",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x3e",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x0000000000000000000000000000000000000000",
//           "toAddress": "0x13ededc25bca247250b93c6eab0291c44273ceb1",
//           "blockNum": "0x19d7421",
//           "hash": "0x3b23a37c645fc12f5e927fc9c60efa5c47b177d400d132f782af265543d9dfa8",
//           "value": 1.1212739901862213e+21,
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x00000000000000000000000000000000000000000000003cc8cd714f668e83fd",
//             "address": "0x225084d30cc297f3b177d9f93f5c3ab8fb6a1454"
//           },
//           "log": {
//             "address": "0x225084d30cc297f3b177d9f93f5c3ab8fb6a1454",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x0000000000000000000000000000000000000000000000000000000000000000",
//               "0x00000000000000000000000013ededc25bca247250b93c6eab0291c44273ceb1"
//             ],
//             "data": "0x00000000000000000000000000000000000000000000003cc8cd714f668e83fd",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0x3b23a37c645fc12f5e927fc9c60efa5c47b177d400d132f782af265543d9dfa8",
//             "transactionIndex": "0x9",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x4d",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x0000000000000000000000000000000000000000",
//           "toAddress": "0x8c3cffc0d194cee0dc4170834d8705099cd51505",
//           "blockNum": "0x19d7421",
//           "hash": "0xcb077234fb8ae0036db65295e80b9bcd1a71489f3bc8a1a590fcd3d5f89564ae",
//           "erc721TokenId": "0x96",
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x",
//             "address": "0x69c941715e514c46f6c10e20be0961523652d1f4"
//           },
//           "log": {
//             "address": "0x69c941715e514c46f6c10e20be0961523652d1f4",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x0000000000000000000000000000000000000000000000000000000000000000",
//               "0x0000000000000000000000008c3cffc0d194cee0dc4170834d8705099cd51505",
//               "0x0000000000000000000000000000000000000000000000000000000000000096"
//             ],
//             "data": "0x",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0xcb077234fb8ae0036db65295e80b9bcd1a71489f3bc8a1a590fcd3d5f89564ae",
//             "transactionIndex": "0x2e",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x14c",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0xf9875c63bae047fc819a3c2351caf2a4b957851a",
//           "toAddress": "0x0000000000000000000000000000000000000000",
//           "blockNum": "0x19d7421",
//           "hash": "0x3b23a37c645fc12f5e927fc9c60efa5c47b177d400d132f782af265543d9dfa8",
//           "value": 57436302,
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x00000000000000000000000000000000000000000000000000000000036c688e",
//             "address": "0xe680e0317402ad3cb37d5ed9fc642702658ef57f"
//           },
//           "log": {
//             "address": "0xe680e0317402ad3cb37d5ed9fc642702658ef57f",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x000000000000000000000000f9875c63bae047fc819a3c2351caf2a4b957851a",
//               "0x0000000000000000000000000000000000000000000000000000000000000000"
//             ],
//             "data": "0x00000000000000000000000000000000000000000000000000000000036c688e",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0x3b23a37c645fc12f5e927fc9c60efa5c47b177d400d132f782af265543d9dfa8",
//             "transactionIndex": "0x9",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x64",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x0000000000000000000000000000000000000000",
//           "toAddress": "0x51bbd64ee99038580481df9605bff93a5921e238",
//           "blockNum": "0x19d7421",
//           "hash": "0xac39defc17c7a268b33cc4b8df9a232fad4b9a0a28f1d446bbcca04619ba13d1",
//           "value": 8.369,
//           "asset": "Sunflower Land",
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x0000000000000000000000000000000000000000000000007424a928bd3e8000",
//             "address": "0xd1f9c58e33933a993a3891f8acfe05a68e1afc05",
//             "decimals": 18
//           },
//           "log": {
//             "address": "0xd1f9c58e33933a993a3891f8acfe05a68e1afc05",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x0000000000000000000000000000000000000000000000000000000000000000",
//               "0x00000000000000000000000051bbd64ee99038580481df9605bff93a5921e238"
//             ],
//             "data": "0x0000000000000000000000000000000000000000000000007424a928bd3e8000",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0xac39defc17c7a268b33cc4b8df9a232fad4b9a0a28f1d446bbcca04619ba13d1",
//             "transactionIndex": "0x26",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x110",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x0000000000000000000000000000000000000000",
//           "toAddress": "0x6bf218e7e39025f75a9cf138d574cdb84ce64639",
//           "blockNum": "0x19d7421",
//           "hash": "0x19779a02bb24e3fceadc4b027c1bfb47553cbc0596bfe1c28c50be760a824994",
//           "erc721TokenId": "0x20",
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x",
//             "address": "0x3926480d67aece1f5f314f8daa66fe33ceca083e"
//           },
//           "log": {
//             "address": "0x3926480d67aece1f5f314f8daa66fe33ceca083e",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x0000000000000000000000000000000000000000000000000000000000000000",
//               "0x0000000000000000000000006bf218e7e39025f75a9cf138d574cdb84ce64639",
//               "0x0000000000000000000000000000000000000000000000000000000000000020"
//             ],
//             "data": "0x",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0x19779a02bb24e3fceadc4b027c1bfb47553cbc0596bfe1c28c50be760a824994",
//             "transactionIndex": "0xa",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x75",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x0000000000000000000000000000000000000000",
//           "toAddress": "0x8c3cffc0d194cee0dc4170834d8705099cd51505",
//           "blockNum": "0x19d7421",
//           "hash": "0xcb077234fb8ae0036db65295e80b9bcd1a71489f3bc8a1a590fcd3d5f89564ae",
//           "erc721TokenId": "0x93",
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x",
//             "address": "0x69c941715e514c46f6c10e20be0961523652d1f4"
//           },
//           "log": {
//             "address": "0x69c941715e514c46f6c10e20be0961523652d1f4",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x0000000000000000000000000000000000000000000000000000000000000000",
//               "0x0000000000000000000000008c3cffc0d194cee0dc4170834d8705099cd51505",
//               "0x0000000000000000000000000000000000000000000000000000000000000093"
//             ],
//             "data": "0x",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0xcb077234fb8ae0036db65295e80b9bcd1a71489f3bc8a1a590fcd3d5f89564ae",
//             "transactionIndex": "0x2e",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x149",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x51bbd64ee99038580481df9605bff93a5921e238",
//           "toAddress": "0x0000000000000000000000000000000000000000",
//           "blockNum": "0x19d7421",
//           "hash": "0xac39defc17c7a268b33cc4b8df9a232fad4b9a0a28f1d446bbcca04619ba13d1",
//           "erc1155Metadata": [
//             {
//               "tokenId": "0x65",
//               "value": "0x98a7d9b8314c0000"
//             },
//             {
//               "tokenId": "0x69",
//               "value": "0x8ac7230489e80000"
//             }
//           ],
//           "category": "erc1155",
//           "rawContract": {
//             "rawValue": "0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000650000000000000000000000000000000000000000000000000000000000000069000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000098a7d9b8314c00000000000000000000000000000000000000000000000000008ac7230489e80000",
//             "address": "0x22d5f9b75c524fec1d6619787e582644cd4d7422"
//           },
//           "log": {
//             "address": "0x22d5f9b75c524fec1d6619787e582644cd4d7422",
//             "topics": [
//               "0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb",
//               "0x000000000000000000000000070717e1bc4c6e46c22b0e0b8821e0ac1d4689c3",
//               "0x00000000000000000000000051bbd64ee99038580481df9605bff93a5921e238",
//               "0x0000000000000000000000000000000000000000000000000000000000000000"
//             ],
//             "data": "0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000650000000000000000000000000000000000000000000000000000000000000069000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000098a7d9b8314c00000000000000000000000000000000000000000000000000008ac7230489e80000",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0xac39defc17c7a268b33cc4b8df9a232fad4b9a0a28f1d446bbcca04619ba13d1",
//             "transactionIndex": "0x26",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x10f",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x80ff4e4153883d770204607eb4af9994739c72dc",
//           "toAddress": "0x0000000000000000000000000000000000000000",
//           "blockNum": "0x19d7421",
//           "hash": "0x3b23a37c645fc12f5e927fc9c60efa5c47b177d400d132f782af265543d9dfa8",
//           "value": 1.1222849947116925e+21,
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x00000000000000000000000000000000000000000000003cd6d54091cd9336f9",
//             "address": "0x225084d30cc297f3b177d9f93f5c3ab8fb6a1454"
//           },
//           "log": {
//             "address": "0x225084d30cc297f3b177d9f93f5c3ab8fb6a1454",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x00000000000000000000000080ff4e4153883d770204607eb4af9994739c72dc",
//               "0x0000000000000000000000000000000000000000000000000000000000000000"
//             ],
//             "data": "0x00000000000000000000000000000000000000000000003cd6d54091cd9336f9",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0x3b23a37c645fc12f5e927fc9c60efa5c47b177d400d132f782af265543d9dfa8",
//             "transactionIndex": "0x9",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x44",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x0000000000000000000000000000000000000000",
//           "toAddress": "0x8c3cffc0d194cee0dc4170834d8705099cd51505",
//           "blockNum": "0x19d7421",
//           "hash": "0xcb077234fb8ae0036db65295e80b9bcd1a71489f3bc8a1a590fcd3d5f89564ae",
//           "erc721TokenId": "0x94",
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x",
//             "address": "0x69c941715e514c46f6c10e20be0961523652d1f4"
//           },
//           "log": {
//             "address": "0x69c941715e514c46f6c10e20be0961523652d1f4",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x0000000000000000000000000000000000000000000000000000000000000000",
//               "0x0000000000000000000000008c3cffc0d194cee0dc4170834d8705099cd51505",
//               "0x0000000000000000000000000000000000000000000000000000000000000094"
//             ],
//             "data": "0x",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0xcb077234fb8ae0036db65295e80b9bcd1a71489f3bc8a1a590fcd3d5f89564ae",
//             "transactionIndex": "0x2e",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x14a",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0xf715beb51ec8f63317d66f491e37e7bb048fcc2d",
//           "toAddress": "0xe0036fb4b5a3b232acfc01fec3bd1d787a93da75",
//           "blockNum": "0x19d7421",
//           "hash": "0xbe50d0bf34074b35f6ff85ad6c975a4dc1c1ef14f05b60dedc6315bc756689fe",
//           "value": 0.00085,
//           "asset": "WETH",
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x000000000000000000000000000000000000000000000000000305120c0f2000",
//             "address": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
//             "decimals": 18
//           },
//           "log": {
//             "address": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x000000000000000000000000f715beb51ec8f63317d66f491e37e7bb048fcc2d",
//               "0x000000000000000000000000e0036fb4b5a3b232acfc01fec3bd1d787a93da75"
//             ],
//             "data": "0x000000000000000000000000000000000000000000000000000305120c0f2000",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0xbe50d0bf34074b35f6ff85ad6c975a4dc1c1ef14f05b60dedc6315bc756689fe",
//             "transactionIndex": "0x8",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x3a",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x1111111254fb6c44bac0bed2854e76f90643097d",
//           "toAddress": "0xc590175e458b83680867afd273527ff58f74c02b",
//           "blockNum": "0x19d7421",
//           "hash": "0x08696572e9133c90c9bb31b30c8660caaf08288e31b1395148d837793bc7c2ba",
//           "value": 555712363075697400,
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x00000000000000000000000000000000000000000000000007b649732e6b7afb",
//             "address": "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7"
//           },
//           "log": {
//             "address": "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x0000000000000000000000001111111254fb6c44bac0bed2854e76f90643097d",
//               "0x000000000000000000000000c590175e458b83680867afd273527ff58f74c02b"
//             ],
//             "data": "0x00000000000000000000000000000000000000000000000007b649732e6b7afb",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0x08696572e9133c90c9bb31b30c8660caaf08288e31b1395148d837793bc7c2ba",
//             "transactionIndex": "0x37",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x16f",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x0000000000000000000000000000000000000000",
//           "toAddress": "0x7734280a4337f37fbf4651073db7c28c80b339e9",
//           "blockNum": "0x19d7421",
//           "hash": "0x9bb3e15d782f912bb76a5ea04f21c6a203d429b63ad939adcaf305c9303dbb02",
//           "value": 2292228693313522200,
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x0000000000000000000000000000000000000000000000001fcfa1da10e909df",
//             "address": "0x8df3aad3a84da6b69a4da8aec3ea40d9091b2ac4"
//           },
//           "log": {
//             "address": "0x8df3aad3a84da6b69a4da8aec3ea40d9091b2ac4",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x0000000000000000000000000000000000000000000000000000000000000000",
//               "0x0000000000000000000000007734280a4337f37fbf4651073db7c28c80b339e9"
//             ],
//             "data": "0x0000000000000000000000000000000000000000000000001fcfa1da10e909df",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0x9bb3e15d782f912bb76a5ea04f21c6a203d429b63ad939adcaf305c9303dbb02",
//             "transactionIndex": "0x3",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x19",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x0000000000000000000000000000000000000000",
//           "toAddress": "0x8c3cffc0d194cee0dc4170834d8705099cd51505",
//           "blockNum": "0x19d7421",
//           "hash": "0xcb077234fb8ae0036db65295e80b9bcd1a71489f3bc8a1a590fcd3d5f89564ae",
//           "erc721TokenId": "0x97",
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x",
//             "address": "0x69c941715e514c46f6c10e20be0961523652d1f4"
//           },
//           "log": {
//             "address": "0x69c941715e514c46f6c10e20be0961523652d1f4",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x0000000000000000000000000000000000000000000000000000000000000000",
//               "0x0000000000000000000000008c3cffc0d194cee0dc4170834d8705099cd51505",
//               "0x0000000000000000000000000000000000000000000000000000000000000097"
//             ],
//             "data": "0x",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0xcb077234fb8ae0036db65295e80b9bcd1a71489f3bc8a1a590fcd3d5f89564ae",
//             "transactionIndex": "0x2e",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x14d",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x0000000000000000000000000000000000000000",
//           "toAddress": "0xb7f575de9deac0180dfbb9020f42a19ad6a2c0dd",
//           "blockNum": "0x19d7421",
//           "hash": "0x9bb3e15d782f912bb76a5ea04f21c6a203d429b63ad939adcaf305c9303dbb02",
//           "value": 7962164689,
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x00000000000000000000000000000000000000000000000000000001da94fdd1",
//             "address": "0x1a13f4ca1d028320a707d99520abfefca3998b7f"
//           },
//           "log": {
//             "address": "0x1a13f4ca1d028320a707d99520abfefca3998b7f",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x0000000000000000000000000000000000000000000000000000000000000000",
//               "0x000000000000000000000000b7f575de9deac0180dfbb9020f42a19ad6a2c0dd"
//             ],
//             "data": "0x00000000000000000000000000000000000000000000000000000001da94fdd1",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0x9bb3e15d782f912bb76a5ea04f21c6a203d429b63ad939adcaf305c9303dbb02",
//             "transactionIndex": "0x3",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x16",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0xf715beb51ec8f63317d66f491e37e7bb048fcc2d",
//           "toAddress": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
//           "blockNum": "0x19d7421",
//           "hash": "0xbe50d0bf34074b35f6ff85ad6c975a4dc1c1ef14f05b60dedc6315bc756689fe",
//           "value": 0.0002125,
//           "asset": "WETH",
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x0000000000000000000000000000000000000000000000000000c1448303c800",
//             "address": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
//             "decimals": 18
//           },
//           "log": {
//             "address": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x000000000000000000000000f715beb51ec8f63317d66f491e37e7bb048fcc2d",
//               "0x0000000000000000000000005b3256965e7c3cf26e11fcaf296dfc8807c01073"
//             ],
//             "data": "0x0000000000000000000000000000000000000000000000000000c1448303c800",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0xbe50d0bf34074b35f6ff85ad6c975a4dc1c1ef14f05b60dedc6315bc756689fe",
//             "transactionIndex": "0x8",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x39",
//             "removed": false
//           }
//         },
//         {
//           "fromAddress": "0x0000000000000000000000000000000000000000",
//           "toAddress": "0xf9875c63bae047fc819a3c2351caf2a4b957851a",
//           "blockNum": "0x19d7421",
//           "hash": "0x3b23a37c645fc12f5e927fc9c60efa5c47b177d400d132f782af265543d9dfa8",
//           "value": 140189,
//           "category": "token",
//           "rawContract": {
//             "rawValue": "0x000000000000000000000000000000000000000000000000000000000002239d",
//             "address": "0xd051605e07c2b526ed9406a555601aa4db8490d9"
//           },
//           "log": {
//             "address": "0xd051605e07c2b526ed9406a555601aa4db8490d9",
//             "topics": [
//               "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//               "0x0000000000000000000000000000000000000000000000000000000000000000",
//               "0x000000000000000000000000f9875c63bae047fc819a3c2351caf2a4b957851a"
//             ],
//             "data": "0x000000000000000000000000000000000000000000000000000000000002239d",
//             "blockNumber": "0x19d7421",
//             "transactionHash": "0x3b23a37c645fc12f5e927fc9c60efa5c47b177d400d132f782af265543d9dfa8",
//             "transactionIndex": "0x9",
//             "blockHash": "0xa35a5646b27565d691f0e1516603bc8e5841f4ab27e7bf1e66ab9fab68641f20",
//             "logIndex": "0x5e",
//             "removed": false
//           }
//         }
//       ]
//     }
//   }
