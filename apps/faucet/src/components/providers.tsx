import { ReactNode } from "react";

import { WagmiProvider } from "wagmi";
import { eosEvmTestnet } from "app-env";
import {
  metaMaskWallet,
  trustWallet,
  walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { sepolia } from "wagmi/chains";

const queryClient = new QueryClient();

export const wagmiConfig = getDefaultConfig({
  appName: "Bitlauncher",
  projectId: "25a868c834c1003aa0f0b69aba0ae056",
   wallets: [
    {
      groupName: 'Popular',
      wallets: [metaMaskWallet, trustWallet, walletConnectWallet]
    }
  ],
  chains: [{ ...eosEvmTestnet, fees: undefined }, sepolia],
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}
