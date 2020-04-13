<template>
  <div>
    <!-- <button class="btn btn-primary" @click="showAPI3">Today I'm thankful for</button> -->

    <div class="form">
      <br />
      <input class="form-control" type="text" v-model="newThanks" /> &nbsp;
      <br />
      <button @click="addThanks">Thank you!</button>

      <div>
        <br />
        <p v-if="posting">Posting...</p>
        <p v-for="ty in thanks" :key="ty.name">{{ ty.name }}</p>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "API3",
  props: {
    msg: String
  },
  data() {
    return {
      thanks: [],
      posting: false,
      newThanks: "",
      show: false
    };
  },
  methods: {
    // showAPI3() {
    //   this.show = true;
    // },
    fetchThanks() {
      this.thanks = [];
      axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
        const data = response.data;
        this.thanks = data;
        this.$emit("fetchthankyou", this.thanks);
      });
    },
    addThanks() {
      this.posting = true;
      axios
        .post("https://jsonplaceholder.typicode.com/users", {
          name: this.newThanks
        })
        .then(response => {
          const data = response.data;
          this.thanks.push(data);
          this.newThanks = "";
          this.posting = false;
          this.$emit("addthankyou", this.newThanks);
        });
    },
    mounted() {
	// this.addThanks;
    //   this.fetchThanks;
    }
  }
};
</script>

<style>
.form {
  width: 50vw;
  position: fixed;
  left: 25%;
}
button{
	background-color: lightskyblue;
	border-radius: 5px;
	color: white;
}
</style>