<template>
  <div class="single-story">
    <h1 class="story-title">{{ story.title }}</h1>
    <br>
    <article>{{ story.body }}</article>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        id: this.$route.params.id,
        story: {}
      }
    },
    created() {
      this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id).then(function(data){
        console.log(data.body);
        this.story = data.body;
      });
    }
  }
</script>

<style scoped>
.story-title{
  text-align: center;
}
.single-story{
  margin: 50px 10% 0 10%;
  padding: 15px;
  border: 1px solid rgba(255, 255, 255, 0.75);
}
</style>
