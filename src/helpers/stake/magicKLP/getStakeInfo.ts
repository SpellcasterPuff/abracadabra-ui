import { getAccountHelper } from "@/helpers/walletClienHelper";
import { magicKlpConfig } from "@/configs/stake/magicKlpConfig";
import { getPublicClient } from "@/helpers/chains/getChainsInfo";
import { getEmptyState } from "@/helpers/stake/magicKLP/getEmptyState";
import { getTokensInfo } from "@/helpers/stake/magicKLP/getTokensInfo";
import type { StakeInfo, EmptyState } from "@/types/magicKlp/stakeInfo";

export const getStakeInfo = async (): Promise<StakeInfo[] | EmptyState[]> => {
  const { address } = await getAccountHelper();

  if (!address) {
    return await Promise.all(
      Object.keys(magicKlpConfig).map(async (chainId: string) => {
        const config: any =
          magicKlpConfig[Number(chainId) as keyof typeof magicKlpConfig];

        return await getEmptyState(config, Number(chainId));
      })
    );
  }

  return await Promise.all(
    Object.keys(magicKlpConfig).map(async (chainId: string) => {
      const config: any =
        magicKlpConfig[+chainId as keyof typeof magicKlpConfig];

      const publicClient = getPublicClient(+chainId);

      const { mainToken, stakeToken } = await getTokensInfo(
        address,
        config,
        publicClient
      );

      return {
        chainId,
        mainToken,
        stakeToken,
      };
    })
  );
};
