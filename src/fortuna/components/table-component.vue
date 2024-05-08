<script>
import {TruckApi} from "../services/truck-api.js";
import ToolbarComponent from "../../app.vue";

export default {
  name: "table-component",
  components: {ToolbarComponent},
  data(){
    return {
      trucks:[{
        "camiones": [
          {
            "id": 1,
            "placa": "ABC123",
            "modelo": "Camión Modelo 1",
            "motor": "Motor Tipo A",
            "anio_fabricacion": 2022,
            "kilometraje": 50000
          },
          {
            "id": 2,
            "placa": "DEF456",
            "modelo": "Camión Modelo 2",
            "motor": "Motor Tipo B",
            "anio_fabricacion": 2020,
            "kilometraje": 75000
          },
          {
            "id": 3,
            "placa": "GHI789",
            "modelo": "Camión Modelo 3",
            "motor": "Motor Tipo C",
            "anio_fabricacion": 2021,
            "kilometraje": 60000
          },
          {
            "id": 4,
            "placa": "JKL012",
            "modelo": "Camión Modelo 4",
            "motor": "Motor Tipo D",
            "anio_fabricacion": 2019,
            "kilometraje": 90000
          },
          {
            "id": 5,
            "placa": "MNO345",
            "modelo": "Camión Modelo 5",
            "motor": "Motor Tipo E",
            "anio_fabricacion": 2023,
            "kilometraje": 40000
          },
          {
            "id": 6,
            "placa": "PQR678",
            "modelo": "Camión Modelo 6",
            "motor": "Motor Tipo F",
            "anio_fabricacion": 2018,
            "kilometraje": 100000
          },
          {
            "id": 7,
            "placa": "STU901",
            "modelo": "Camión Modelo 7",
            "motor": "Motor Tipo G",
            "anio_fabricacion": 2020,
            "kilometraje": 80000
          },
          {
            "id": 8,
            "placa": "VWX234",
            "modelo": "Camión Modelo 8",
            "motor": "Motor Tipo H",
            "anio_fabricacion": 2021,
            "kilometraje": 55000
          },
          {
            "id": 9,
            "placa": "YZA567",
            "modelo": "Camión Modelo 9",
            "motor": "Motor Tipo I",
            "anio_fabricacion": 2019,
            "kilometraje": 95000
          },
          {
            "id": 10,
            "placa": "BCD890",
            "modelo": "Camión Modelo 10",
            "motor": "Motor Tipo J",
            "anio_fabricacion": 2024,
            "kilometraje": 30000
          }
        ]
      }
      ],

    }
  },
  created(){
    this.truckApi=new TruckApi();
    this.truckApi.getAll().then((response => {
      this.trucks = response.data;
      console.log(this.trucks);
    }));
  }


}
</script>
<template>
  <h1>FORTUNA TRUCK DESCRIPTIONS</h1>
  <!-- <div class="table-container">
     <pv-data-table :value="trucks">
       <pv-column v-for="(value, name) in trucks[0]" :key="name" :field="name" :header="name"></pv-column>
     </pv-data-table>
   </div>-->

  <div class="truck-card" v-for="truck in trucks" :key="truck.id">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9x2yKeBvWjJ-9LiJd0q1Z9t_Gryq860kW-J-0w-AZg&s" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9x2yKeBvWjJ-9LiJd0q1Z9t_Gryq860kW-J-0w-AZg&s">
    <h2>ID:{{ truck.id }}</h2>
    <p>Placa: {{ truck.placa }} </p>
    <p>Motor: {{ truck.motor }} </p>
    <p>Kilometraje: {{ truck.kilometraje }} </p>
    <p>Año: {{ truck. anio_fabricacion}}</p>
  </div>


</template>


<style scoped>

h1{
  margin-left:25%;
}
.truck-card {
  border: 1px solid #ccc;
  align-items: center;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%; /* or whatever width you want */
  margin: 20px auto; /* centers the card horizontally */
}
img{
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

pv-card {
  flex-basis: calc(33% - 1rem); /* Adjust this value to control the number of cards per row */
  margin: 0.5rem;
}

.table-container {
  margin-top:5%;
  margin-left: 25%; /* Add margin */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: 100%;  /* Adjust the width as needed */
  overflow: auto; /* Add scrollbars if necessary */
  border: 1px solid black; /* Add border */
}

/* For devices with width less than 600px */
@media only screen and (max-width: 600px) {
  .table-container {
    justify-content: flex-start; /* Align to the left */
    width: 100%;
    margin-top:10%; /* Move to the correct place */
  }
}


/* For devices with width between 600px and 1200px */
@media only screen and (min-width: 601px) and (max-width: 1200px) {
  .table-container {
    width: 75%;
  }
}

/* For devices with width more than 1200px */
@media only screen and (max-width: 667px) {
  h1 {
    margin-left:-10px;
    text-align:center;
  }
  img{
    width: 80%;
    height: 70px;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
