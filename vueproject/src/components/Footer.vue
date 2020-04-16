<template>
    <footer>
      <small> {{foot}} </small>  
    </footer>
</template>

<script>
export default {
    data(){
    return {
        foot:"© Break Management 2020"
    }
}
}
</script>

<style scoped>
footer{
    
    background-color:  rgb(65, 184, 131);
    
    height: 4em;
    font-weight: 300;
    position: relative;
    bottom: 0px;
    width: 100%;
   
    
    
} 

</style>