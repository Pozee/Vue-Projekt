<template>
  <div id="app">
    <HeaderTimer />
    <br><Form />
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
