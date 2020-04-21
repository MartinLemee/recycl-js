<template>
  <div id="app">
    <navigationBar />
    <router-view/>
  </div>
</template>
<script>
import navigationBar from "./components/navigationBar";
export default {
  components: {navigationBar}
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>