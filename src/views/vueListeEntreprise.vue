<template>
    <div class="main">
        <table>
            <tr class="title">
                <th>Raison Sociale</th>
                <th>n° Rue</th>
                <th>Code postal</th>
                <th>Ville</th>
                <th>n° Tel.</th>
                <th>Contact</th>
                <th>Siret</th>
            </tr>
            <tr class="items" v-for="(info, index) in infos" :key="index">
                <td>{{info.raisonsociale}}</td>
                <td>{{info.norueentr}} {{info.rueentr}}</td>
                <td>{{info.cpostalentr}}</td>
                <td>{{info.villeentr}}</td>
                <td>{{info.notel}}</td>
                <td>{{info.contact}}</td>
                <td>{{info.siret}}</td>
            </tr>
        </table>
    </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
import router from "../router"; 
import axios from 'axios';
 import { API_URL } from '../services/config';

export default {
    name: 'vueDemande',
    data: () => ({
        description :"",
        infos: "",
    }),
    created: function() {
        this.fetchData()
    },
     methods: {
         fetchData(){
             axios.get(API_URL + "listeentreprise").then(response =>{
                this.infos = response.data.items
                console.log(this.infos) 
            })

         },

    }

}

</script>

<style scoped>
    table {
        margin-left: auto;
        margin-right: auto;
        border-collapse: collapse;
        width: 68%;
    }
    table, th, td {
        border: 1px solid #2a73c7;
        border-collapse: separate;
    }
    th, td {
        padding: 6px;
        text-align: left;
    }
    th {
        background-color: #2a73c7;
        color: white;
        text-align: center;
    }
    .title {
        font-size: 16px;
    }
    .items:hover {background-color: #f5f5f5;}
    form {
        margin-left: auto;
        margin-right: auto;
        width: 18%;
    }
    button {
        margin: 5px;
        margin-left: -100px;
    }
</style>