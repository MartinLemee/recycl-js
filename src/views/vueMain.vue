<template>
  <div class="home">
      <vueMain msg="Main"/>
      <form>
        Home
      </form>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  methods: {
    onListerDemande() {
      this.$router.push("listerdemande")
    }
  }

}
</script>