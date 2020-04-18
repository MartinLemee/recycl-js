<template>
  <div class="home">
      <vueMain msg="Main"/>
  </div>
</template>

<script>
// @ is an alias to /src
import vueMain from '../components/vueMain.vue'
export default {
  name: 'home',
  components: {
    vueMain
  }
}
</script>