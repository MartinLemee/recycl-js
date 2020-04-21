<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/listerdemande">Liste Demande</router-link>
        <router-link to="/entreprise">Liste Entreprises</router-link>
        <router-link to="/demande">Liste Employe</router-link>
        <router-link to="/listedechet">Liste Types de dechet</router-link>
    </nav>
</template>

<script>
    export default {
        name: "navigationbar",
    }
</script>

<style scoped>
    nav{
        background-color: rgb(240,240,240);
        margin-bottom: 10px;
    }
    nav a{
        display: inline-flex;
        padding: 10px;
        border: 1px solid transparent;
        text-decoration: none;
        color: grey;
    }
    nav a.router-link-exact-active{
        border-bottom: 1px solid black;
    }
</style>