<template>
    <div class="main">
        <table>
            <tr class="title">
                <th>Nom déchet</th>
                <th>Niveau de danger</th>
            </tr>
            <tr class="items" v-for="(info, index) in infos" :key="index">
                <td>{{info.nomtypedechet}}</td>
                <td>{{info.niv_danger}}</td>
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
             axios.get(API_URL + "listedechet").then(response =>{
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