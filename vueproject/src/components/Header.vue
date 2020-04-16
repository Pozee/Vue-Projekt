<template>
    <header>
      <h1 class="headerText">{{head}}</h1>  
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
}
	.headerText{
	padding-top: 10px;
}
@media(max-width: 500px){
	.headerText{
	font-size: 2em;
	padding-top: 15px;
}
    
}


</style>