<template>
  <div id="app">
	<HeaderTimer />
    <br />
    <Form />
    <br />
    <weather />
    <jokeApi class="jokeWrapper" />
  </div>
</template>

<script>

import weather from "./components/weather.vue";
import jokeApi from "./components/jokeApi.vue";
import HeaderTimer from "./components/HeaderTimer.vue";
import Form from "./components/Form.vue";


export default {
  name: "App",
  components: {
    weather,
    jokeApi,
    HeaderTimer,
	  Form
  }
  
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

#API2{
	margin-top: 450px;
}
.jokeWrapper {
  margin-top: 2em;
}
</style>
