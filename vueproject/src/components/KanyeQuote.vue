<template>
  <div>
    <div class="quotes">
      <br />
      <br />
      <div class="quoteBox" v-if="show">
        <p class="joke">{{ kanyeQuote.quote }}</p>
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
    showKanyeQuote() {
      axios
        .get("https://api.kanye.rest/")
        .then(response => {
          this.kanyeQuote = response.data;
          this.$emit("fetchKanyeQuote", this.kanyeQuote);
          this.show = true;
        })
        .catch(error => {
          console.log(error);
        });
	},
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
.joke {
  font-weight: 700;
}
button:focus {
  outline: 0;
}

.quotes {
margin-bottom: 8rem;
}
</style>