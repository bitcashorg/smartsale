import { TestnetEasyAuction } from 'smartevm-abis';
import { useContractRead } from 'wagmi';


export function useAuctionData(auctionId: number) {
  const { data: rawData, isError, isLoading } = useContractRead({
    ...TestnetEasyAuction,
    functionName: 'auctionData',
    args: [auctionId],
  });

  const data = rawData ? mapArrayToAuctionData(rawData) : undefined;

  return { data, isError, isLoading };
}

function mapArrayToAuctionData(data: unknown): AuctionData | undefined {
  if (Array.isArray(data)) {
    return {
      auctioningToken: data[0],
      biddingToken: data[1],
      orderCancellationEndDate: new Date(Number(data[2]) * 1000),
      auctionEndDate: new Date(Number(data[3]) * 1000),
      initialAuctionOrder: data[4],
      minimumBiddingAmountPerOrder: data[5].toString(),
      interimSumBidAmount: data[6].toString(),
      interimOrder: data[7],
      clearingPriceOrder: data[8],
      volumeClearingPriceOrder: data[9].toString(),
      minFundingThresholdNotReached: data[10],
      isAtomicClosureAllowed: data[11],
      feeNumerator: data[12].toString(),
      minFundingThreshold: data[13].toString(),
    };
  }
  return undefined;
}

interface AuctionData {
  auctioningToken: string;
  biddingToken: string;
  orderCancellationEndDate: Date;
  auctionEndDate: Date;
  initialAuctionOrder: string;
  minimumBiddingAmountPerOrder: string;
  interimSumBidAmount: string;
  interimOrder: string;
  clearingPriceOrder: string;
  volumeClearingPriceOrder: string;
  minFundingThresholdNotReached: boolean;
  isAtomicClosureAllowed: boolean;
  feeNumerator: string;
  minFundingThreshold: string;
}