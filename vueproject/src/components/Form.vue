<template>
  <div>
    <form v-if="!show">
      <div>
        <h1>BREAK MANAGER</h1>

        <div>
          <label>Task</label> &nbsp;
          <input class="task" type="text" v-model="task" />
        </div>

        <div>
          <label>Description of task</label> &nbsp;
          <input class="description" type="text" v-model="description" />
        </div>

        <div>
          <label>Estimated time to execute (h)</label> &nbsp;
          <input class="time" type="number" v-model="time" />
        </div>
      </div>

      <button @click="addTask">Add Task</button>
    </form>

    <div v-if="show">Your task is to: <a>{{ task }}</a> <br>
	Description: <a>{{ description }}</a> <br> 
	The estimated execturion time is: <a>{{ time }}</a> hours!
	<button></button></div>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    msg: String
  },
  data() {
    return {
      task: "",
      description: "",
      time: "",
      show: false
    };
  },
  methods: {
    addTask() {
      this.show = true;
	},
	
  }
};
</script>

<style>
</style>