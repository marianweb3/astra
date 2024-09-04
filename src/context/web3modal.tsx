'use client'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';
import { siweConfig } from '../siwe/siwe';

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = '6c0f11b30530ec4b68a7958a5f5c713e';

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create a metadata object
const metadata = {
  name: 'Astra',
  description: 'Astra',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}
// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: false, // true by default
  enableCoinbase: false, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1 ,// used for the Coinbase SDK
  auth: {
    email: false,
    socials: false
  }
})

// 5. Create a AppKit instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: false,// Optional - defaults to your Cloud configuration
  siweConfig
})

export function AppKit({ children }) {
  return children
}