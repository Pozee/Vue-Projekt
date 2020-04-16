<template>
  <div>
    <div class="form">
      <br />
      <input class="form-control" type="text" v-model="newThanks" style="text-align: center" placeholder="Add thanks..." /> 
      <button class="addButton" @click="addThanks">Add</button>

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
    };
  },
  methods: {
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
  }
};
</script>

<style>

.addButton{
  background-color: rgb(65, 184, 131);
  border-radius: 5px;
  color: white;
  margin: 5px 5px 0 5px;
}
.addButton:focus {
  outline: 0;
}

.form {
  margin-bottom: 8rem;
  margin-top: 2rem;
}
</style>