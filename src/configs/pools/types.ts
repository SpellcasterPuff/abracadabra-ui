import type { Contract } from "@/configs/blast/types";

export type PoolConfig = {
  id: number;
  chainId: number;
  name: string;
  icon: string;
  decimals: number;
  contract: Contract;
  baseToken: TokenConfig;
  quoteToken: TokenConfig;
  lockContract?: Contract;
  stakeContract?: Contract;
  rewardTokens?: TokenConfig[];
  settings: PoolSettings;
};

// TODO: may be changed in future
type PoolSettings = {
  isNew: boolean;
  isDeprecated: boolean;
  isMim: boolean;
  isPointsLogic?: boolean;
};

export type TokenConfig = {
  name: string;
  icon: string;
  decimals: number;
  contract: Contract;
  mainColor?: string;
  isPopular?: boolean;
};
