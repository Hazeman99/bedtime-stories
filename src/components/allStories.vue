<template>
  <div>
    <input type="text" v-model="search" placeholder="Search story..."/>
    <div class="buttons">
      <div>
        <button v-on:click="prevPage()" v-bind:class="{canClickPrev: canClickPrev}" >Prev Page</button>
        <p>{{ currentPage+1 }} of {{ pages }}</p>
        <button v-on:click="nextPage()" v-bind:class="{canClickNext: canClickNext}">Next Page</button>
      </div>
    </div>
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
        currentStories: [],
        search: '',
        currentPage: 0,
        pages: 0,
        storiesPerPage: 10,
        canClickPrev: false,
        canClickNext: false
      }
    },
    methods: {
      nextPage(){
        if(this.currentPage < this.pages-1){
          return this.currentPage++;
        }else{
          this.canClickNext = true;
        }
      },
      prevPage(){
        if(this.currentPage > 0){
          return this.currentPage--;
        }else{
          this.canClickPrev = true;
        }
      }
    },
    components: {

    },
    computed: {
      filteredStories: function(){
            this.currentStories = this.stories.slice(this.currentPage * this.storiesPerPage, (this.currentPage * this.storiesPerPage) + this.storiesPerPage);
            return this.currentStories.filter((story) => {
                return story.title.match(this.search);
            });
        }
    },
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
        this.stories = data.body;
        this.pages = Math.ceil(this.stories.length / this.storiesPerPage); 
        this.currentStories = this.stories.slice(this.currentPage * this.storiesPerPage, (this.currentPage * this.storiesPerPage) + this.storiesPerPage);
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
.buttons{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
  background: 0;
}
.buttons div{
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.buttons button{
  color: rgba(255, 255, 255, 0.75);
  background: 0;
  border: 0;
  margin: 5px;
  padding: 10px;
}
</style>
