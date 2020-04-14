<template>
  <div>
    <button @click="getJoke">Get joke</button>
    <div class="center">
      <p class="joke">{{joke}}</p>
    </div>
  </div>
</template>

<script>
const jokeUrl = "https://icanhazdadjoke.com/";

export default {
  data: () => ({
    joke: ""
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
</style>
