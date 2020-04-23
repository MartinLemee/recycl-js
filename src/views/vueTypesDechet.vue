<template>
    <div class="main">
        <button @click="preYear">Année Précédente</button>
        <button @click="nextYear">Année Suivante</button>
         <FunctionalCalendar
        class= "calendar"
        v-model="calendarData"
        :date-format="'yyyy-mm-dd'"
        :is-date-range="true"
        :change-year-function="true"
        ref="Calendar"      
        ></FunctionalCalendar>
        <button @click="sortDate">Trier</button>
        <table>
            <tr class="title">
                <th>Nom déchet</th>
                <th>Quantitée Enlevée</th>
            </tr>
            <tr class="items" v-for="(info, index) in infos" :key="index">
                <td>{{info.nomtypedechet}}</td>
                <td>{{info.quantiteenlevee}}</td>
            </tr>
        </table>
    </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
import router from "../router"; 
import axios from 'axios';
import { FunctionalCalendar } from 'vue-functional-calendar'
import { API_URL } from '../services/config';

export default {
    name: 'vueDemande',
    data: () => ({
        description :"",
        infos: "",
        searchBarDate: "",
        calendarData: {}
    }),
    created: function() {
        this.fetchData()
    },
    components: {
        FunctionalCalendar
    },
     methods: {
         fetchData(){
             axios.get(API_URL + "listedechet").then(response =>{
                this.infos = response.data.items
                console.log(this.infos) 
            })

         },
         sortDate() {
             var dateDebut = this.calendarData.dateRange.start.date
             var dateFin = this.calendarData.dateRange.end.date

              axios.get(API_URL + "typedechettotal/" + dateDebut + "/" + dateFin).then(response =>{
                this.infos = response.data.items
                console.log(this.infos) 
            })
         },
         preYear() {
             this.$refs.Calendar.PreYear();
         },
         nextYear() {
             this.$refs.Calendar.NextYear();
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
    }
    .calendar {
        width: 20%;
        border-radius: 100%;
        margin: 0 auto;
}
    
</style>