<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import allStories from './components/allStories.vue'
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    'all-stories': allStories,
    'app-header': Header
  }
}
</script>

<style>
body {
  font-family: Sans-Serif;
  background: rgba(0, 0, 0, 0.955);
  color: rgba(255, 255, 255, 0.75);
}
</style>
