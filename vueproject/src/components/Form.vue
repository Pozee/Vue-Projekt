<template>
  <div>
    <form v-if="!show">
      <div>
        <h1>BREAK MANAGER</h1>

        <div class="form-group">
          <label>
            Task
            <small v-if="taskIsTouched && !taskIsValid" class="error">{{ taskErrorMessage }}</small>
            <small v-if="taskIsTouched && taskIsValid" class="success">{{ taskMessage }}</small>
          </label>
          <br />
          <input
            class="form-control"
            type="text"
            v-model="task"
            :class="taskClass"
            @blur.once="taskIsTouched = true"
          />
        </div>

        <div class="form-group">
          <label>
            Description of task
            <small
              v-if="descrIsTouched && !descrIsValid"
              class="error"
            >{{ descrErrorMessage }}</small>
            <small v-if="descrIsTouched && descrIsValid" class="success">{{ descrMessage }}</small>
          </label>
          <br />
          <textarea
            cols="3"
            rows="5"
            class="form-control"
            type="text"
            v-model="description"
            :class="descrClass"
            @blur.once="descrIsTouched = true"
          />
        </div>

        <div class="form-group">
          <label>
            Est. time to execute (h)
            <small
              v-if="timeIsTouched && !timeIsValid"
              class="error"
            >{{ timeErrorMessage }}</small>
            <small v-if="timeIsTouched && timeIsValid" class="success">{{ timeMessage }}</small>
          </label>
          <br />
          <input
            class="form-control"
            type="number"
            v-model="time"
            :class="timeClass"
            @blur.once="timeIsTouched = true"
          />
        </div>
      </div>

      <button
        class="btn btn-primary"
        :disabled="!formIsValid"
        @click.prevent="addTask"
      >Add Task</button>
    </form>

    <div v-if="show">
      Task:
      <a>{{ task }}</a>
      <br />Description:
      <a>{{ description }}</a>
      <br />Estimated execution time:
      <a>{{ time }}</a> hours!
      <br />GOOD LUCK TODAY!
    </div>
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
      show: false,
      descrIsTouched: false,
      taskIsTouched: false,
      timeIsTouched: false
    };
  },
  methods: {
    addTask() {
      this.show = true;
    }
  },
  computed: {
    //TASK VALIDATION
    taskIsValid() {
      const tasks = this.task;
      return tasks.length >= 1;
    },
    taskClass() {
      if (!this.taskIsTouched) return "";
      return this.taskIsValid ? "valid" : "invalid";
    },
    taskErrorMessage() {
      return "Enter task";
    },
    taskMessage() {
      return "Good job!";
    },
    //DESCRIPTION VALIDATION
    descrIsValid() {
      const descr = this.description;
      return descr.length >= 1;
    },
    descrClass() {
      if (!this.descrIsTouched) return "";
      return this.descrIsValid ? "valid" : "invalid";
    },
    descrErrorMessage() {
      return "Enter description";
    },
    descrMessage() {
      return "Good job!";
    },
    //TIME VALIDATION
    timeIsValid() {
      const number = this.time;
      return number.length >= 1;
    },
    timeClass() {
      if (!this.timeIsTouched) return "";
      return this.timeIsValid ? "valid" : "invalid";
    },
    timeErrorMessage() {
      return "Enter a number";
    },
    timeMessage() {
      return "Good job!";
    },
    //FORM VALIDATION
    formIsValid() {
      return this.taskIsValid && this.descrIsValid && this.timeIsValid;
    }
  }
};
</script>

<style scoped>

.error {
  color: red;
}

.success {
  color: green;
}

form {
  width: 70vw;
  position: fixed;
  left: 15%;
}

label {
  position: fixed;
  left: 15%;
}
</style>