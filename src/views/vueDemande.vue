<template>
    <div class="main">
        <div class="search-wrapper">
            <input type="text" v-model="searchBarDate" @change="searchDate()" placeholder="Date..." />
        </div>
        <br>
        <table>
            <tr class="title">
                <th>n° demande</th>
                <th>date demande</th>
                <th>date enlevement</th>
                <th>siret</th>
                <th>n° tournee</th>
            </tr>
            <tr class="items" v-for="(info, index) in infos" :key="index">
                <td> {{info.nodemande}} </td>
                <td><a :href="getUrl(info.datedemande)">{{(info.datedemande).substring(0, 10)}}</a></td>
                <td> {{(info.dateenlevement).substring(0, 10)}} </td>
                <td> {{info.siret}}</td>
                <td> {{info.notournee}} </td>
                
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
             axios.get(API_URL + "demande").then(response =>{
                this.infos = response.data.items
                console.log(this.infos) 
            })

         },
         getUrl(date) {
            return API_URL + "demande/" + date;
         },
         searchDate() {
             var searchBarD = this.searchBarDate
             axios.get(API_URL + "demande/" + (searchBarD.substring(0, 10))).then(response =>{
                 console.log(searchBarD.substring(0, 10))
                 this.infos = response.data.items
                 console.log(this.infos)
             })
         }

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
        border: 1px solid black;
    }
    th, td {
        padding: 6px;
        text-align: left;
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
        margin-left: -130px;
    }
</style>