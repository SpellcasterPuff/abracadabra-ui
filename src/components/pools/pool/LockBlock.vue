<template>
  <div class="lock-container">
    <img src="@/assets/images/lock-border.png" alt="" class="border-img" />
    <p class="title">Lock MLP to Get a Founder Boost</p>

    <div class="info-item">
      <p>Lock for 3 months</p>
      <div
        class="icon-wrap"
        v-tooltip="'Lock your MLP for 3 months to get a Founder Boost'"
      >
        <svg
          class="lock-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M11.375 4.375H9.625V3.0625C9.625 2.36631 9.34844 1.69863 8.85616 1.20634C8.36387 0.714062 7.69619 0.4375 7 0.4375C6.30381 0.4375 5.63613 0.714062 5.14384 1.20634C4.65156 1.69863 4.375 2.36631 4.375 3.0625V4.375H2.625C2.39294 4.375 2.17038 4.46719 2.00628 4.63128C1.84219 4.79538 1.75 5.01794 1.75 5.25V11.375C1.75 11.6071 1.84219 11.8296 2.00628 11.9937C2.17038 12.1578 2.39294 12.25 2.625 12.25H11.375C11.6071 12.25 11.8296 12.1578 11.9937 11.9937C12.1578 11.8296 12.25 11.6071 12.25 11.375V5.25C12.25 5.01794 12.1578 4.79538 11.9937 4.63128C11.8296 4.46719 11.6071 4.375 11.375 4.375ZM5.25 3.0625C5.25 2.59837 5.43437 2.15325 5.76256 1.82506C6.09075 1.49687 6.53587 1.3125 7 1.3125C7.46413 1.3125 7.90925 1.49687 8.23744 1.82506C8.56563 2.15325 8.75 2.59837 8.75 3.0625V4.375H5.25V3.0625ZM11.375 11.375H2.625V5.25H11.375V11.375Z"
            fill="white"
          />
        </svg>
      </div>
    </div>

    <div class="info-item gold">
      <p>Founder boost</p>
      <div
        class="icon-wrap"
        v-tooltip="
          'Receiving 20% of total ecosystem points: Points, Gold, Potions'
        "
      >
        <img src="@/assets/images/points-dashboard/rocket.svg" alt="" />
      </div>
    </div>
  </div>

  <!-- <BaseButton primary @click="actionHandler" :disabled="disableLockButton">
    {{ lockButtonText }}
  </BaseButton> -->
</template>

<script>
import {
  writeContractHelper,
  simulateContractHelper,
  waitForTransactionReceiptHelper,
} from "@/helpers/walletClienHelper";
import moment from "moment";
import { mapGetters } from "vuex";
// import { defineAsyncComponent } from "vue";
import { BlastLockingMultiRewards } from "@/constants/blast";
import { switchNetwork } from "@/helpers/chains/switchNetwork";
import { getPublicClient } from "@/helpers/chains/getChainsInfo";
import BlastLockingMultiRewardsAbi from "@/abis/BlastLockingMultiRewards";

export default {
  props: {
    pool: { type: Object },
  },
  emits: ["updateInfo"],
  data() {
    return {
      isPending: false,
      lockAllowance: 0n,
    };
  },

  computed: {
    ...mapGetters({
      account: "getAccount",
      chainId: "getChainId",
    }),

    isProperNetwork() {
      return this.chainId === this.pool.chainId;
    },

    disableLockButton() {
      return this.isPending;
    },

    lockButtonText() {
      if (!this.isProperNetwork) return "Switch network";
      if (this.isPending) return "Processing...";
      if (this.lockAllowance < this.pool.userInfo.balance) return "Approve";
      return "Lock";
    },
  },

  methods: {
    async actionHandler() {
      if (!this.isProperNetwork) return switchNetwork(this.pool.chainId);

      this.isPending = true;

      try {
        if (this.lockAllowance < this.pool.userInfo.balance) {
          await this.approve();
          return;
        }

        await this.lock();
      } catch (error) {
        console.log("lockHandler error: ", error);
        this.isPending = false;
      } finally {
        this.isPending = false;
      }
    },

    async approve() {
      const { request } = await simulateContractHelper({
        address: this.pool.contract.address,
        abi: this.pool.contract.abi,
        functionName: "approve",
        args: [BlastLockingMultiRewards, this.pool.userInfo.balance],
      });

      const hash = await writeContractHelper(request);

      const result = await waitForTransactionReceiptHelper({ hash });

      if (result.status === "success") {
        this.lockAllowance = await this.fetchLockAllowance();
      }
    },

    async lock() {
      const now = moment().unix(); // current Unix timestamp
      //   const inNinetyDays = moment().add(90, "days").unix(); // Unix timestamp 90 days from now
      const { request } = await simulateContractHelper({
        address: BlastLockingMultiRewards,
        abi: BlastLockingMultiRewardsAbi,
        functionName: "stakeLocked",
        args: [this.pool.userInfo.balance, now + 100],
      });

      const hash = await writeContractHelper(request);

      const result = await waitForTransactionReceiptHelper({ hash });

      if (result.status === "success") {
        this.$emit("updateInfo");
        this.$router.push({ name: "PointsDashboard" });
      }
    },

    async fetchLockAllowance() {
      const chainId = this.pool.chainId;
      const publicClient = getPublicClient(chainId);

      const allowance = await publicClient.readContract({
        chainId,
        address: this.pool.contract.address,
        abi: this.pool.contract.abi,
        functionName: "allowance",
        args: [this.account, BlastLockingMultiRewards],
      });

      this.lockAllowance = allowance;
    },
  },
  async created() {
    await this.fetchLockAllowance();
  },

  // components: {
  //   BaseButton: defineAsyncComponent(() =>
  //     import("@/components/base/BaseButton.vue")
  //   ),
  // },
};
</script>

<style lang="scss" scoped>
.lock-container {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .border-img {
    width: 100%;
    height: 1px;
    margin: 0 auto 8px;
  }

  .title {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #fff;
    font-size: 16px;
    font-weight: 400;

    &.gold {
      color: #fcfd02;
    }

    .icon-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.16);

      svg,
      img {
        width: 80%;
        height: auto;
      }
    }
  }
}
</style>
