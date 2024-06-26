<template>
  <div class="assets-wrap">
    <div class="asset" v-for="asset in assetsInfo" :key="asset.symbol">
      <p class="asset-title">{{ asset.title }}</p>
      <div class="asset-info">
        <div class="asset-token">
          <BaseTokenIcon
            class="token-icon"
            :icon="asset.icon"
            :name="asset.symbol"
            size="44px"
          />
          <span class="token-name">{{ asset.symbol }}</span>
        </div>

        <div class="asset-values">
          <span class="token-value">{{ asset.amount }}</span>
          <span class="usd-equivalent" v-if="asset.amountUsd">{{
            asset.amountUsd
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BaseTokenIcon from "@/components/base/BaseTokenIcon.vue";
import type { PropType } from "vue";

export type AssetInfo = {
  title: string;
  symbol: string;
  icon: string;
  amount: string | number;
  amountUsd?: string;
};

export default {
  props: {
    assetsInfo: {
      type: Array as PropType<AssetInfo[]>,
    },
  },

  components: {
    BaseTokenIcon,
  },
};
</script>

<style lang="scss" scoped>
.assets-wrap {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.asset {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 112px;
  padding: 16px;
  gap: 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: linear-gradient(
    90deg,
    rgba(45, 74, 150, 0.04) 0%,
    rgba(116, 92, 210, 0.04) 100%
  );
}

.asset-title {
  font-size: 16px;
  font-weight: 500;
}

.asset-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.asset-token {
  display: flex;
  align-items: center;
  gap: 4px;
}

.token-icon {
  margin-right: 0;
}

.token-name {
  color: #fff;
  font-size: 20px;
  font-weight: 500;
}

.asset-values {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.token-value {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: -4px;
}

.usd-equivalent {
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
}

@media screen and (max-width: 700px) {
  .assets-wrap {
    flex-direction: column;
  }

  .asset {
    width: 100%;
  }

  .asset-title {
    font-size: 14px;
  }

  .token-name {
    font-size: 18px;
  }

  .token-value {
    font-size: 14px;
  }

  .usd-equivalent {
    font-size: 12px;
  }
}
</style>
