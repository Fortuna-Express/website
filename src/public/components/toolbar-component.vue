<script>
export default {
  name: "toolbar-component",
  data() {
    return {
      drawer: false,
      items:[
        {label: "Home", to: "/home"},
        {label: "Trucks", to: "/trucks"},
      ],
      sidebarItems: [
        {label: "Home", to: "/home"},
        {label: "Trucks", to: "/trucks"},
      ],


    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }


}
</script>

<template>

  <pv-toolbar class="red">
    <template #start>
      <pv-button class="p-button-text text-white" icon="pi pi-bars" @click="toggleDrawer"/>
      <img src="../../assets/fort.png" alt="Truck Management">

    </template>
    <template #end>
      <div class="flex-columnx">
        <router-link to="/home" class="boton1" >Home</router-link>
        <router-link to="/trucks" class="boton2" >Trucks</router-link>
      </div>
    </template>
  </pv-toolbar>

  <pv-sidebar v-model:visible="drawer">
    <router-link v-for="item in sidebarItems" :key="item.label" v-slot="{navigate, href}" :to="item.to" custom>
      <pv-button :href="href" class="p-button-text separated-button" @click="navigate">{{ item.label }}</pv-button>
    </router-link>
  </pv-sidebar>




</template>

<style scoped>
.flex-columnx{
  margin-right:50px;
}
img{
  width: 900%;
  height: 70px;
  margin-left: 10px;
  margin-right: 10px;
}
.p-button-text{
  background-color: #d51414;
  margin-right:-10px;
  color: white;
  width:25%

}
 .separated-button {
   margin: 10px;
 }

.boton1 {
  color: #c61818;
  background-color:white ;
  margin-right:50px;

}
.boton2{
  color: #c61818;
  background-color:white ;
  margin-right:50px;

}

</style>