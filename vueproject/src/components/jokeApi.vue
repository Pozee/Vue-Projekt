<template>
  <div>
    <div class="jokes">
      <br />
      <br />
      <div class="center" v-if="show">
        <p class="joke">{{ joke }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const jokeUrl = "https://icanhazdadjoke.com/";

export default {
  data: () => ({
    joke: "",
    show: true
  }),
  methods: {
    async getJoke() {
      let config = {
        headers: {
          accept: "application/json"
        }
      };
      try {
        let response = await this.$http.get(jokeUrl, config);
        this.joke = response.data.joke;
        this.$emit("getJokeQuote", this.joke);
        this.show = true;
      } catch (error) {
        console.log("Something went wrong", error);
      }
    }
  }
  
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
}
.joke {
  font-weight: 700;
}
button {
  background-color: lightskyblue;
  border-radius: 5px;
  color: white;
  margin-top: 10px;
}
button:focus {
  outline: 0;
}

.jokes {
  margin-bottom: 8rem;
}
</style>
