<template>
  <div>
    <div class="header">
		<br><h1 class="timerClass">
			{{ timer }}
		</h1>
	</div>
  </div>
</template>

<script>
export default {
  name: "HeaderTimer",
  props: ["timer", "state"]
};
</script>

<style>
.header {
  margin-top: 0;
  width: 100vw;
  height: 100px;
  background: lightcyan;
}

.timerClass{
	
}
</style>