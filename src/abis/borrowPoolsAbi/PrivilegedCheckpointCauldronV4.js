export default [
  {
    inputs: [
      {
        internalType: "contract IBentoBoxV1",
        name: "bentoBox_",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "magicInternetMoney_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "ErrNotClone", type: "error" },
  { inputs: [], name: "ErrOverflow", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint128",
        name: "accruedAmount",
        type: "uint128",
      },
    ],
    name: "LogAccrue",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
    ],
    name: "LogAddCollateral",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "part",
        type: "uint256",
      },
    ],
    name: "LogBorrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "current",
        type: "uint256",
      },
    ],
    name: "LogBorrowOpeningFeeChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "blacklisted",
        type: "bool",
      },
    ],
    name: "LogChangeBlacklistedCallee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint128",
        name: "newLimit",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "perAddressPart",
        type: "uint128",
      },
    ],
    name: "LogChangeBorrowLimit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "current",
        type: "uint256",
      },
    ],
    name: "LogCollateralizationRateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "LogExchangeRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newFeeTo",
        type: "address",
      },
    ],
    name: "LogFeeTo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "oldInterestRate",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "newInterestRate",
        type: "uint64",
      },
    ],
    name: "LogInterestChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralShare",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowPart",
        type: "uint256",
      },
    ],
    name: "LogLiquidation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "current",
        type: "uint256",
      },
    ],
    name: "LogLiquidationMultiplierChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
    ],
    name: "LogRemoveCollateral",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "part",
        type: "uint256",
      },
    ],
    name: "LogRepay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "feeTo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feesEarnedFraction",
        type: "uint256",
      },
    ],
    name: "LogWithdrawFees",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "BORROW_OPENING_FEE",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "COLLATERIZATION_RATE",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LIQUIDATION_MULTIPLIER",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "accrue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "accrueInfo",
    outputs: [
      { internalType: "uint64", name: "lastAccrued", type: "uint64" },
      { internalType: "uint128", name: "feesEarned", type: "uint128" },
      { internalType: "uint64", name: "INTEREST_PER_SECOND", type: "uint64" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "addBorrowPosition",
    outputs: [{ internalType: "uint256", name: "part", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "bool", name: "skim", type: "bool" },
      { internalType: "uint256", name: "share", type: "uint256" },
    ],
    name: "addCollateral",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "blacklistedCallees",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "borrow",
    outputs: [
      { internalType: "uint256", name: "part", type: "uint256" },
      { internalType: "uint256", name: "share", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "borrowLimit",
    outputs: [
      { internalType: "uint128", name: "total", type: "uint128" },
      {
        internalType: "uint128",
        name: "borrowPartPerAddress",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint128", name: "newBorrowLimit", type: "uint128" },
      { internalType: "uint128", name: "perAddressPart", type: "uint128" },
    ],
    name: "changeBorrowLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint64", name: "newInterestRate", type: "uint64" },
    ],
    name: "changeInterestRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "collateral",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8[]", name: "actions", type: "uint8[]" },
      { internalType: "uint256[]", name: "values", type: "uint256[]" },
      { internalType: "bytes[]", name: "datas", type: "bytes[]" },
    ],
    name: "cook",
    outputs: [
      { internalType: "uint256", name: "value1", type: "uint256" },
      { internalType: "uint256", name: "value2", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "exchangeRate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeTo",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
    name: "init",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "isSolvent",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "users", type: "address[]" },
      { internalType: "uint256[]", name: "maxBorrowParts", type: "uint256[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "contract ISwapperV2", name: "swapper", type: "address" },
      { internalType: "bytes", name: "swapperData", type: "bytes" },
    ],
    name: "liquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "magicInternetMoney",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "masterContract",
    outputs: [
      { internalType: "contract CauldronV4", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [{ internalType: "contract IOracle", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracleData",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "reduceSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "share", type: "uint256" },
    ],
    name: "removeCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "bool", name: "skim", type: "bool" },
      { internalType: "uint256", name: "part", type: "uint256" },
    ],
    name: "repay",
    outputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "callee", type: "address" },
      { internalType: "bool", name: "blacklisted", type: "bool" },
    ],
    name: "setBlacklistedCallee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_borrowOpeningFee", type: "uint256" },
    ],
    name: "setBorrowOpeningFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_collateralizationRate",
        type: "uint256",
      },
    ],
    name: "setCollateralizationRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newFeeTo", type: "address" }],
    name: "setFeeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_liquidationMultiplier",
        type: "uint256",
      },
    ],
    name: "setLiquidationMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBorrow",
    outputs: [
      { internalType: "uint128", name: "elastic", type: "uint128" },
      { internalType: "uint128", name: "base", type: "uint128" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalCollateralShare",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateExchangeRate",
    outputs: [
      { internalType: "bool", name: "updated", type: "bool" },
      { internalType: "uint256", name: "rate", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userBorrowPart",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userCollateralShare",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
