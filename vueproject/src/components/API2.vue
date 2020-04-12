<template>
  <div>
    <button class="btn btn-primary" @click="showQuote">Kanye quote</button>
	<br />
	<br />
    <div v-if="show">{{ kanyeQuote.quote }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "API2",
  props: {
    msg: String
  },

  data() {
    return {
      kanyeQuote: "",
      show: false
    };
  },
  methods: {
    showQuote() {
      axios
        .get("https://api.kanye.rest/")
        .then(response => {
          console.log(response.data);
          this.kanyeQuote = response.data;
          this.show = true;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>