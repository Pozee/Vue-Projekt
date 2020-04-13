<template>
  <div>
    <form v-if="!show">
      <div>
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

      <button class="btn btn-primary" :disabled="!formIsValid" @click.prevent="addTask">Add Task</button> &nbsp;
    </form>

    <div v-if="show">
      <h4>/här ska timer visas/</h4>
      <br />Task:
      <a>{{ task }}</a>
      <br />Description:
      <a>{{ description }}</a>
      <br />Estimated execution time:
      <a>{{ time }}</a> hours!
      <br />GOOD LUCK TODAY!
      <br />
      <br />
      <button class="btn btn-primary" @click="taskDone">Done</button>
      <br />
      <br />
      <h4>/nedan ska "activities" visas när tiden på timern är slut, de syns just nu men tänker att de ska vara hidden eller disabled kanske?/</h4>

      <div class="apis">
        <API2 class="api2" @fetchKanyeQuote="showQuote($event)"/>

        <API3 class="api3" @fetchthankyou="fetchThanks($event)" @addthankyou="addThanks($event)" />
      </div>
    </div>
  </div>
</template>

<script>
import API2 from "./API2.vue";
import API3 from "./API3.vue";
export default {
  name: "Form",
  components: {
    API2,
    API3
  },
  props: {
    msg: String
  },
  data() {
    return {
      task: "",
      description: "",
      time: "",
      show: false,
      showButton: false,
      descrIsTouched: false,
      taskIsTouched: false,
      timeIsTouched: false,
      getThanks: "",
      addThankU: "",
      showAPI3: false,
      addQuote: ""
    };
  },
  methods: {
    showQuote(kanye) {
      this.addQuote = kanye;
    },
    addThanks(thanksss) {
      this.addThankU = thanksss;
      this.showAPI3 = true;
    },
    fetchThanks(thankss) {
      this.getThanks = thankss;
      this.showAPI3 = true;
    },
    addTask() {
      this.show = true;
      this.localData();
      this.task = JSON.parse(localStorage.getItem("task"));
      this.description = JSON.parse(localStorage.getItem("description"));
      this.time = JSON.parse(localStorage.getItem("time"));
    },
    localData: function() {
      let parsedTask = JSON.stringify(this.task);
      localStorage.setItem("task", parsedTask);
      let parsedDescription = JSON.stringify(this.description);
      localStorage.setItem("description", parsedDescription);
      let parsedTime = JSON.stringify(this.time);
      localStorage.setItem("time", parsedTime);
    },
    taskDone() {
      localStorage.clear("task");
      localStorage.clear("description");
      localStorage.clear("time");
      location.reload();
    },
    checkLS() {
      if (
        localStorage.getItem("task") === null ||
        localStorage.getItem("description") === null ||
        localStorage.getItem("time") === null
      ) {
        console.log("Empty");
      } else {
        this.show = true;
        this.task = JSON.parse(localStorage.getItem("task"));
        this.description = JSON.parse(localStorage.getItem("description"));
        this.time = JSON.parse(localStorage.getItem("time"));
      }
    }
  },
  mounted() {
    this.checkLS();
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
h4 {
  color: green;
}
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
.apis {
  display: flex;
  justify-content: center;
}
.api2 {
  margin-right: 10px;
}
.api3 {
  margin-left: 10px;
}
</style>