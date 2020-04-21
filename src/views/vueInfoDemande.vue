<template>
    <div class="main">
        <table >
             <tr class="title">
                <th>n° Demande</th>
                <th>Date Creation</th>
                <th>Date Enlevement</th>
                <th>Siret</th>
                <th>n° Tournee</th>
            </tr>
            <tr class="items" v-for="(info, index) in infos" :key="index">
                <td>{{info.nodemande}}</td>
                <td>{{(info.datedemande).substring(0, 10)}}</td>
                <td> {{(info.dateenlevement).substring(0, 10)}} </td>
                <td> {{info.siret}}</td>
                <td> {{info.notournee}} </td>
            </tr>
        </table>
        <table class="table2">
            <tr class="title">
                <th>Type du dechet</th>
                <th>Quantitée enlevée</th>
                <th>Niveau danger</th>
            </tr>
            <tr class="items" v-for="(infoD, indexD) in infosDechet" :key="indexD">
                <td>{{infoD.nomtypedechet}}</td>
                <td>{{infoD.quantitedeposee}}</td>
                <td>{{infoD.niv_danger}}</td>
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
    name: 'vueInfoDemande',
    data: () => ({
        description :"",
        infos: "",
        infosDechet: ""
    }),
    created: function() {
        this.fetchData()
    },
     methods: {
         fetchData(){
             var idDemande = this.$route.params.info.nodemande
             var idTournee = this.$route.params.info.notournee
             console.log(idDemande)
             console.log(idTournee)

             axios.get(API_URL + "infodemande/" + idDemande).then(response =>{
                this.infos = response.data.items
                console.log("infos = " + this.infos) 
            })

            axios.get(API_URL + "infodemandedechet/"+ idTournee).then(response => {
                this.infosDechet = response.data.items
                console.log("infosDechet = " + this.infosDechet)
            })


         }
    }

}

</script>

<style scoped>
    .main {
        display: flex;
    }
    table {
        margin-left: 10px;
        margin-right: 10px;
        border-collapse: collapse;
        width: 40%;
        flex: 1; 
        padding: 2px;
    }
    table, th, td {
        border: 2px solid #2a73c7;
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
        margin-left: -130px;
    }
    
</style>