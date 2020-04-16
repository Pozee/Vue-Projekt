<template>
  <div class="center">
  <p>hej</p>
    <div class="base-timer">
      <svg
        class="base-timer__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g class="base-timer__circle">
          <circle
            class="base-timer__path-elapsed"
            cx="50"
            cy="50"
            r="45"
          ></circle>
          <path
            :stroke-dasharray="circleDasharray"
            class="base-timer__path-remaining"
            :class="remainingPathColor"
            d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
          ></path>
        </g>
      </svg>
      <span class="base-timer__label">{{ formattedTimeLeft }}</span>
      <img src="assets/pause.svg" class="knappar" @click="pauseTimer" />
      <img src="./assets/play.svg" class="knappar" @click="startTimer" />
      <img src="../assets/nonstop.svg" class="knappar" @click="stopTimer" />
      <!-- <button class="btn btn-primary" @click="startTimer">Start</button>
      <button class="btn btn-primary" @click="pauseTimer">Pause</button>
      <button class="btn btn-primary" @click="stopTimer">Stop</button> -->
    </div>
  </div>
</template>
<script>
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 5;
const ALERT_THRESHOLD = 3;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 10;

export default {
  data() {
    return {
      timePassed: 0,
      timerInterval: null,
      break: false

    };
  },

  computed: {
    circleDasharray() {
      return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
    },

    formattedTimeLeft() {
      const timeLeft = this.timeLeft;
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      return `${minutes}:${seconds}`;
    },

    timeLeft() {
      return TIME_LIMIT - this.timePassed;
    },

    timeFraction() {
      const rawTimeFraction = this.timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    },

    remainingPathColor() {
      const { alert, warning, info } = COLOR_CODES;

      if (this.timeLeft <= alert.threshold) {
        return alert.color;
      } else if (this.timeLeft <= warning.threshold) {
        return warning.color;
      } else {
        return info.color;
      }
    }
  },

  watch: {
    timeLeft(newValue) {
      if (newValue === 0) {
        this.onTimesUp();
      }
    }
  },

  // created() {
  //   this.startTimer();
  // },

  methods: {
    onTimesUp() {
      clearInterval(this.timerInterval);
      this.$emit("breakCheck", true);
      
    },

    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    },

    pauseTimer() {
      clearInterval(this.timerInterval);
    },

    stopTimer() {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
      this.timePassed = 0;
      this.$emit("breakCheck", false);
    }
  }
};
</script>

<style scoped lang="scss">
.knappar {
  height: 3rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  margin-top: 1rem;
  cursor: pointer;
}

.knappar :hover {
  transform: scale(1.1);
  // transition: 0.1s;
}
.center {
  display: flex;
  justify-content: center;
  margin-bottom: 5em;
}
.base-timer {
  position: relative;
  width: 15rem;
  height: 15rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;

  &__svg {
    transform: scaleX(-1);
  }

  &__circle {
    fill: none;
    stroke: none;
  }

  &__path-elapsed {
    stroke-width: 7px;
    stroke: grey;
  }

  &__path-remaining {
    stroke-width: 10px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: currentColor;

    &.green {
      color: rgb(65, 184, 131);
    }

    &.orange {
      color: orange;
    }

    &.red {
      color: red;
    }
  }

  &__label {
    position: absolute;
    width: 15rem;
    height: 15rem;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
  }

  .btn {
    margin-top: 20px;
  }
}
</style>
