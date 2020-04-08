<template>
  <div>
    <div class="header">
      <br />
      <h1>{{ timerCount }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTimer",
  data() {
    return {
      timerCount: 45
    };
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true // This ensures the watcher is triggered upon creation
    }
  }
};
</script>


<style>
.header {
  margin-top: 0;
  width: 100vw;
  height: 100px;
  background: lightcyan;
}
</style>