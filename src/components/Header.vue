<template>
  <div>
    <header>
      <h1>Bedtime Story</h1>
    </header>
    <br><br><br>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        story: []
      }
    }
  }
</script>


<style scoped>
header{
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  margin: 0 auto 100% auto;
  background: url('../assets/stars.jpg') no-repeat center/cover;
  background-position: center;
  width: 100%;
  background-size: cover;
}
header h1{
  background: none;
  text-align: center;
}
</style>
