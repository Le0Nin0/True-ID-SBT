import { type Chain } from "viem";

export const polygonAmoy = {
  id: 80002,
  name: "Polygon Amoy Testnet",
  network: "maticamoy",
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc-amoy.polygon.technology/"] },
    public: { http: ["https://rpc-amoy.polygon.technology/"] },
  },
  blockExplorers: {
    default: { name: "Polygonscan", url: " https://amoy.polygonscan.com/" },
  },
  contracts: {},
} as const satisfies Chain;
