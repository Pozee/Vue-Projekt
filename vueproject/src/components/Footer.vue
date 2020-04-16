<template>
    <footer>
      <small class="footText"> {{foot}} </small>  
    </footer>
</template>

<script>
export default {
    data(){
    return {
        foot:"© Break Manager 2020"
    }
}
}
</script>

<style scoped>

footer{
    
    background-color:  rgb(65, 184, 131);
    
    height: 4em;
    font-weight: 300;
    position: fixed;
    bottom: 0px;
    width: 100%; 
    
    
} 
.footText{
    padding: 10px;
}

</style>