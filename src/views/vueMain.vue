<template>
  <div class="home">
      <vueMain msg="Main"/>
      <form>
        <button @click="onListerDemande()">ListerDemande</button>
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