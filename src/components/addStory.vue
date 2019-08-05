<template>
  <div>
    <br>
    <br>
    <input type="text" v-model="story.title" name="title" placeholder="Story Title"></input>
    <br>
    <br>
    <textarea name="body" v-model="story.body" rows="20" cols="75">Story Body</textarea>
    <br>
    <button v-on:click="add">Submit</button>

    <p>{{ story.title }}</p>
    <p>{{ story.body }}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        id: this.$route.params.id,
        story: {
          title: '',
          body: ''
        },
        submitted: false
      }
    },
    methods: {
      add () {
        this.$http.post('https://bedtime-stories-198c6.firebaseio.com/posts.json', this.story).then(function(data){
          this.submitted = true;
        })
      }
    }
  }
</script>

<style scoped>
.story-title{
  text-align: center;
}
</style>
