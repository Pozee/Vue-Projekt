<template>
  <div id="app">
    <weather />
    <jokeApi class="jokeWrapper" />
  </div>
</template>

<script>
import weather from "./components/weather.vue";
import jokeApi from "./components/jokeApi.vue";

export default {
  name: "App",
  components: {
    weather,
    jokeApi
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.jokeWrapper {
  margin-top: 2em;
}
</style>
