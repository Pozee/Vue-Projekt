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

      <button :disabled="!formIsValid" @click.prevent="addTask">Add Task</button> &nbsp;
    </form>

    <div v-if="show">
      <HeaderTimer />
      <br />Task:
      <a>{{ task }}</a>
      <br />Description:
      <a>{{ description }}</a>
      <br />Estimated execution time:
      <a>{{ time }}</a> hours!
      <br />GOOD LUCK
      TODAY!
      <br />
      <br />
      <button class="btn btn-primary" @click="taskDone">Done</button>
      <br />
      <br />
      <!-- <h4></h4>
        /nedan ska "activities" visas när tiden på timern är slut, de syns just
        nu men tänker att de ska vara hidden eller disabled kanske?/
      </h4>-->

      <!--lägga in en v-show eller v-if som visar apin när timer = 0 så att de inte syns innan -->

      <button
        @click="showKanyeQuote(), activeBtn = 'btn1'"
        :class="{active: activeBtn === 'btn1' }"
      >Daily quote</button>
      <button
        @click="showThankful(), activeBtn = 'btn2'"
        :class="{active: activeBtn === 'btn2' }"
      >Today I'm thankful for</button>

      <button
        @click="showJokeQuote(), activeBtn = 'btn3'"
        :class="{active: activeBtn === 'btn3' }"
      >Joke</button>

      <button
        @click="getWeather(), activeBtn = 'btn4'"
        :class="{active: activeBtn === 'btn4' }"
      >Weather</button>

      <API2 v-show="showKanyeQ" class="api2" @fetchKanyeQuote="showKanyeQuote($event)" />

      <API3
        v-show="showThanks"
        class="api3"
        @fetchthankyou="fetchThanks($event)"
        @addthankyou="addThanks($event)"
      />

      <jokeApi v-show="showJoke" @getJokeQuote="showJokeQuote($event)" />
      <weather v-show="thisWeather" @getThisWeather="getWeather($event)" />
    </div>
  </div>
</template>

<script>
import weather from "./weather.vue";
import jokeApi from "./jokeApi.vue";
import HeaderTimer from "./HeaderTimer.vue";
import API2 from "./API2.vue";
import API3 from "./API3.vue";
export default {
  name: "Form",
  components: {
    API2,
    API3,
    HeaderTimer,
    jokeApi,
    weather
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
      addQuote: "",
      showThanks: false,
      showKanyeQ: false,
      activeBtn: "",
      addJoke: "",
      showJoke: false,
      addWeather: "",
      thisWeather: false
    };
  },
  methods: {
    getWeather(weather) {
      this.addWeather = weather;
      this.thisWeather = true;
      this.showJoke = false;
      this.showThanks = false;
      this.showKanyeQ = false;
    },
    showJokeQuote(joke) {
      this.addJoke = joke;
      this.showJoke = true;
      this.showThanks = false;
      this.showKanyeQ = false;
      this.thisWeather = false;
    },
    showThankful() {
      this.showThanks = true;
      this.showKanyeQ = false;
      this.thisWeather = false;
      this.showJoke = false;
      this.activeBtn;
    },
    showKanyeQuote(kanye) {
      this.showKanyeQ = true;
      this.showThanks = false;
      this.thisWeather = false;
      this.showJoke = false;
      this.addQuote = kanye;
    },
    addThanks(thanksss) {
      this.addThankU = thanksss;
    },
    fetchThanks(thankss) {
      this.getThanks = thankss;
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
button {
  background-color: lightskyblue;
  border-radius: 5px;
  color: white;
  margin: 0 5px 0 5px;
}
.active {
  border-bottom: 2px solid blue;
  color: white;
}
button:focus {
  outline: 0;
}

/* .apis {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin: 2em;
}

.api2 {
  margin-right: 10px;
}
.api3 {
  margin-left: 10px;
} */
</style>
