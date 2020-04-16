<template>
  <div class="form1">
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

      <button :disabled="!formIsValid" @click.prevent="addTask" class="addtask">Add Task</button> &nbsp;
    </form>

    <div v-if="show">
      <HeaderTimer @breakCheck="isItBreak($event)"/>
      <br />
      <strong>Task: &nbsp;</strong>
      <a class ="task">{{ task }}</a>
      <br />
      <strong>Description:&nbsp;</strong>
      <a class ="task">{{ description }}</a>
      <br />
      <strong>Estimated execution time:&nbsp;</strong>
      <a class ="task">{{ time }}</a> hours!
      <br />
      <strong>
        GOOD LUCK
        TODAY!
      </strong>
      <br />
      <br />
      <button class="Done" @click="taskDone">Change Task</button>
      <br />
      <br />

      <!-- <h4></h4>
        /nedan ska "activities" visas när tiden på timern är slut, de syns just
        nu men tänker att de ska vara hidden eller disabled kanske?/
      </h4>-->

      <!--lägga in en v-show eller v-if som visar apin när timer = 0 så att de inte syns innan -->
      
      <div class="apiButtons" v-if="isBreak">
      <button
        @click="newKanye(), activeBtn = 'btn1'"
        :class="{active: activeBtn === 'btn1' }"
      >Kanye quote</button>
      <button
        @click="showThankful(), activeBtn = 'btn2'"
        :class="{active: activeBtn === 'btn2' }"
      >Today I'm thankful for</button>
<!-- tog bort showJokeQuote(), -->
      <button @click="getNewJoke(),activeBtn = 'btn3'" :class="{active: activeBtn === 'btn3' }">Joke</button>

      <button
        @click="getWeather(), activeBtn = 'btn4'"
        :class="{active: activeBtn === 'btn4' }"
      >Weather</button>
      <API2 ref="getNewKanye" v-show="showKanyeQ" class="api2" @fetchKanyeQuote="showKanyeQuote($event)" />

      <API3
        v-show="showThanks"
        class="api3"
        @fetchthankyou="fetchThanks($event)"
        @addthankyou="addThanks($event)"
      />

      <jokeApi ref="newJoke" v-show="showJoke" @getJokeQuote="showJokeQuote($event)"/>
      <weather v-show="thisWeather" @getThisWeather="getWeather($event)" />
    </div>
    
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
    msg: String,
     // getJoke()
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
      thisWeather: false,
      isBreak: false
    };
    
  },
  methods: {
    isItBreak(value) {
      if(value) {
        this.isBreak = true;
      } else this.isBreak = false;
    },
    getWeather(weather) {
      this.addWeather = weather;
      this.thisWeather = true;
      this.showJoke = false;
      this.showThanks = false;
      this.showKanyeQ = false;
    },
    showJokeQuote() {
      //this.addJoke = joke;
      this.showJoke = true;
      this.showThanks = false;
      this.showKanyeQ = false;
      this.thisWeather = false;
    },
    getNewJoke() {
     this.$refs.newJoke.getJoke();
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
    newKanye(){
      this.$refs.getNewKanye.showKanyeQuote();
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
/* form {
  width: 70vw;
  position: fixed;
  left: 15%;
}*/
/* label {
  position: fixed;
  left: 15%;
}  */

.Done{
  background-color: rgb(226, 158, 11);
  border-radius: 5px;
  color: white;
  margin: 0 5px 0 5px;
  margin-left: auto;
  margin-right: auto;
}
button {
  background-color: rgb(65, 184, 131);
  border-radius: 5px;
  color: white;
  margin: 0 5px 0 5px;
}
.active {
  
  color:black;
}
button:focus {
  outline: 0;
}
.task{
  font-weight: 400;
  
}
.form1{
  width: 40vw;
  position: relative;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
@media ( max-width: 500px){
.apiButtons{
	margin-top:-40px;
}
  button{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    
  }

}
  .addtask {
    background-color: rgb(226, 158, 11);
  }
/* .apis {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin: 2em;
} */
/* .api2 {
  margin-right: 10px;
}
.api3 {
  margin-left: 10px;
} */ 
</style>
