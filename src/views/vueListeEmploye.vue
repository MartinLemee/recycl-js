<template>
    <div class="main">
        <table>
            <tr class="title">
                <th>n° Employe</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Date de naissance</th>
                <th>Date d'embauche</th>
                <th>Salaire</th>
                <th>n° Fonction</th>
            </tr>
            <tr class="items" v-for="(info, index) in infos" :key="index">
                <td>{{info.noemploye}}</td>
                <td>{{info.nom}}</td>
                <td>{{info.prenom}}</td>
                <td>{{info.datenaiss}}</td>
                <td>{{info.dateembauche}}</td>
                <td>{{info.salaire}}</td>
                <td>{{info.nofonction}}</td>
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
        searchBarDate: ""
    }),
    created: function() {
        this.fetchData()
    },
     methods: {
         fetchData(){
             axios.get(API_URL + "listeemploye").then(response =>{
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