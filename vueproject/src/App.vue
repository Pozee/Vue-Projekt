<template>
  <div id="app">
    <div>
      <app-header />
    </div>
    <br/>
    <br/>
    <br/>
    <div>
      <Form />
    </div>
    <br/>
    <br/>
    <br/>
    <div>
      <app-footer />
    </div>
    
  </div>
  
</template>
<!---snygga till det här ovan --->
<!---snygga till det här ovan --->
<script>
import Form from "./components/Form.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Form,
   'app-header': Header,
   'app-footer': Footer,
  },
};
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;

}


</style>

