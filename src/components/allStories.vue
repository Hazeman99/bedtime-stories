<template>
  <div>
    <input type="text" v-model="search" placeholder="Search story..."/>
    <div class="story-box" v-for="story in filteredStories">
      <router-link v-bind:to="'/story/' + story.id"><h2>{{ story.title }}</h2></router-link>
    </div>
  </div>
</template>


<script>

  export default {
    data () {
      return {
        stories: [],
        search: ''
      }
    },
    components: {

    },
    computed: {
      filteredStories: function(){
            return this.stories.filter((story) => {
                return story.title.match(this.search);
            });
        }
    },
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
        this.stories = data.body.slice(0,10);
      });
    }
  }
</script>


<style scoped>
.story-box{
  display: flex;
  align-items: center;
  max-width: 800px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  margin: 35px auto 20px auto;
  padding: 20px;
}
a{
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
}
input[type="text"]{
  display: flex;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.955);
  border: 1px solid rgba(255, 255, 255, 0.75);
  width: 35%;
  margin: 50px auto 0;
  color: rgba(255, 255, 255, 0.75);
}
</style>
