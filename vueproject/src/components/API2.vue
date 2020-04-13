<template>
  <div>
    <div class="quotes">
      <button @click="showQuote">Kanye quote</button>
      <br />
      <br />
      <div class="quoteBox" v-if="show">
        <p class="quote">{{ kanyeQuote.quote }}</p>
      </div>
    </div>
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
      show: true
    };
  },
  methods: {
    showQuote() {
      axios
        .get("https://api.kanye.rest/")
        .then(response => {
          console.log(response.data);
          this.kanyeQuote = response.data;
          this.$emit("fetchKanyeQuote", this.kanyeQuote);
          this.show = true;
        })
        .catch(error => {
          console.log(error);
        });
	},
	// mounted(){
	// 	this.showQuote();
	// }
  }
};
</script>

<style>
button{
	background-color: lightskyblue;
	border-radius: 5px;
	color: white;
	margin-top: 10px; 
}
</style>