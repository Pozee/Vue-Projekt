<template>
  <div id="app">
    <HeaderTimer :timer="formattedTime" :state="timerState" />
    <br />
    <Form />
  </div>
</template>

<script>
import HeaderTimer from "./components/HeaderTimer.vue";
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: {
    HeaderTimer,
    Form
  },
  data() {
    return {
      timerState: "stopped",
      currentTimer: 0,
      formattedTime: "00:00",
      ticker: undefined
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
