<template>
  <div id="app">
    <app-header />
      <Form class="Form"/>
    <app-footer />
    
    
      
    
      
    
    
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
.Form{
  padding-top: 10px;
  padding-bottom: 70px;
}
 @media(max-width: 500px){
  .Form{
    padding-top: 10px;
    padding-bottom: 70px;

  }
} 

</style>

