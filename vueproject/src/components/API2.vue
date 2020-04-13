<template>
  <div>
    <button class="btn btn-primary" @click="showQuote">Daily Kanye quote</button>
	<br />
	<br />
    <div class="quoteBox" v-if="show">
		<p class="quote">{{ kanyeQuote.quote }}</p></div>
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
          this.$emit("fetchKanyeQuote", this.kanyeQuote);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.quoteBox{
	width: 150px;
}
.quoteBox.quote{
	word-wrap: break-word;
}
</style>