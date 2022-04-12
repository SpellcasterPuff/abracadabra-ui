export default [
  {
    inputs: [
      {
        internalType: "contract IBentoBoxV1",
        name: "bentoBox_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "MIM",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIM3POOL",
    outputs: [
      { internalType: "contract CurvePool", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TETHER",
    outputs: [
      { internalType: "contract TetherToken", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USDT_VAULT",
    outputs: [
      { internalType: "contract YearnVault", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bentoBox",
    outputs: [
      { internalType: "contract IBentoBoxV1", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "shareToMin", type: "uint256" },
      { internalType: "uint256", name: "shareFrom", type: "uint256" },
    ],
    name: "swap",
    outputs: [
      { internalType: "uint256", name: "extraShare", type: "uint256" },
      { internalType: "uint256", name: "shareReturned", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
