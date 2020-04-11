<template>
  <div>
    <div class="header">
      <br />
<<<<<<< HEAD
      <h1>{{ timerCount }}</h1>
=======
      <!-- <h1>{{ timerCount }}</h1> -->
      <h1>BREAK MANAGER</h1>
>>>>>>> alex
    </div>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
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
=======
  name: "HeaderTimer"
  //   data() {
  //     return {
  //       timerCount: 45
  //     };
  //   },
  //   watch: {
  //     timerCount: {
  //       handler(value) {
  //         if (value > 0) {
  //           setTimeout(() => {
  //             this.timerCount--;
  //           }, 1000);
  //         }
  //       },
  //       immediate: true // This ensures the watcher is triggered upon creation
  //     }
  //   }
>>>>>>> alex
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