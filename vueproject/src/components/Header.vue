<template>
    <header>
      <h1 class="text" >{{head}}</h1>  
    </header>
</template>

<script>
export default {
    data(){
    return {
        head:"Break Management"
    }
}
}
</script>

<style scoped>
header{
    background-color:  rgb(65, 184, 131);
    height: 4em;
    font-weight: 700;
    margin-bottom: 100px;
}
.text{
    padding: 10px;
}
@media(max-width: 500px){
    header{
        font-weight: 100;
    }
    
}
</style>