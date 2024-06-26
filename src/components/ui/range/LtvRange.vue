<template>
  <div>
    <div class="ltv-range-wrap">
      <div class="base-track">
        <div class="progress-track" :style="{ background: gradientRangeTrack }">
          <span class="progress-value" :style="progressValuePosition">
            {{ positionLtv + 1 >= max ? max : positionLtv }}%
          </span>
          <span class="progress-percent-max" v-show="showMcrPercent"
            >{{ max }}%</span
          >
          <input
            :class="['range', risk]"
            :style="updateTrackPosition"
            type="range"
            v-model="inputValue"
            :min="min"
            :max="max"
            :step="step"
            :disabled="disabled"
            @input="updateRange"
          />
          <span class="tooltipLtv" :style="progressValuePosition"
            >LTV
            <TooltipIcon :width="13" :height="13" tooltip="Loan to To Value"
          /></span>

          <span class="tooltipMcr" v-show="showMcrPercent"
            >MCR
            <TooltipIcon
              :width="13"
              :height="13"
              fill="#878B93"
              tooltip="Maximum collateral ratio (MCR) represents the maximum amount of debt a user can borrow against the current value of the collateral token."
          /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from "vue";
export default {
  props: {
    value: { type: [Number, String], default: 0 },
    positionLtv: { type: [Number], default: 0 },
    step: { type: Number, default: 1 },
    mcr: { type: Number, default: 0 },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 75 },
    risk: { type: [String, Boolean], default: "default" },
    disabled: { type: Boolean, default: false },
  },

  data(): any {
    return {
      inputValue: this.positionLtv,
      colors: {
        safe: { start: "#356D37", end: "#67A069" },
        medium: { start: "#A78300", end: "#FED84F" },
        high: { start: "#4F1717", end: "#8C4040" },
      },
    };
  },

  computed: {
    progressValuePosition() {
      return `left: ${this.gradientPercent}%`;
    },

    progressValue() {
      return `${Math.round((this.max / 100) * this.gradientPercent)}%`;
    },

    gradientRangeTrack() {
      return `linear-gradient(
            90deg,
            ${this.colors[this.risk].start} 0%,
            ${this.colors[this.risk].end} ${this.gradientPercent + 2}%,
            #0C0F1C ${this.gradientPercent}%,
            #212555 100%
          )
          `;
    },

    trackPercent() {
      return Math.floor(
        (100 / (this.max - this.min)) * (this.positionLtv - this.min)
      );
    },

    progressPercent() {
      return Math.floor(
        (this.mcr / (this.max - this.min)) * (this.positionLtv - this.min)
      );
    },

    gradientPercent() {
      if (this.progressPercent > this.max) return 100;
      return this.trackPercent;
    },

    updateTrackPosition() {
      return document.documentElement.style.setProperty(
        "--track-position",
        this.gradientPercent + "%"
      );
    },

    showMcrPercent() {
      return +this.gradientPercent <= 85 ? true : false;
    },
  },

  methods: {
    updateRange(event: any) {
      const value = event.target.value;
      this.$emit("updateValue", Number(value));
    },
  },

  components: {
    TooltipIcon: defineAsyncComponent(
      () => import("@/components/ui/icons/Tooltip.vue")
    ),
  },
};
</script>

<style lang="scss" scoped>
:root {
  --track-position: 100%;
}

@include range;

.ltv-range-wrap {
  height: 62px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.base-track {
  position: relative;
  border-radius: 12px;
  height: 16px;
  background: linear-gradient(
    291deg,
    #102649 -26%,
    #0c0f1c 41%,
    #131728 63%,
    #212555 124%
  );
  box-shadow: 0px 0px 6.8px 0px rgba(125, 109, 201, 0.18);
}

.progress-track {
  max-width: 80%;
  display: flex;
  align-items: center;
  border-radius: 12px 0 0 12px;
  height: 16px;
  position: relative;
}

.progress-value,
.tooltipLtv {
  width: 20px;
  text-align: center;
  position: absolute;
  top: -150%;
  font-size: 14px;
  line-height: 150%;
}

.tooltipLtv {
  width: 40px;
  display: flex;
  top: auto;
  gap: 4px;
  align-items: center;
  bottom: -150%;
}

.range::-webkit-slider-thumb {
  position: absolute;
  left: var(--track-position);
  width: 22px;
  z-index: 2;
}

.safe,
.medium,
.high {
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    width: 3px;
    height: 20px;
    background: #67a069;
    border-radius: 2px;
  }
}

.medium {
  &::after {
    background: #ddc237;
  }
}

.high {
  &::after {
    background: #8c4040;
  }
}

.progress-percent-max {
  width: 30px;
  position: absolute;
  top: -150%;
  right: 0;
  transform: translateX(65%);
  color: #878b93;
  font-size: 14px;
  line-height: 150%;
}

.tooltipMcr {
  position: absolute;
  right: 0;
  transform: translateX(165%);
  width: 55px;
  display: flex;
  top: auto;
  gap: 4px;
  align-items: center;
  bottom: -150%;
  font-size: 14px;
  line-height: 150%;
}

.tooltipMcr {
  right: 18%;
  color: #878b93;
}
</style>
