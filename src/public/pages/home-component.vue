<script>
export default {
  name: "home-component"
}
</script>

<template>
  <div class="textcomplete">
    <h1>Fortuna Express</h1>
    <p>
      Somos una empresa peruana dedicada al comercio de transporte de trailers a nivel nacional. Nuestra misión es brindar un servicio de transporte seguro, eficiente y confiable para satisfacer las necesidades logísticas de nuestros clientes en todo el país.
      Contamos con una flota moderna de trailers equipados con la última tecnología y un equipo de conductores capacitados para garantizar la entrega oportuna de la carga.
    </p>
  </div>
</template>

<style scoped>
.textcomplete{
  text-align: justify;
  margin: auto;
  width: 50%; /* Ajusta este valor según tus necesidades */
}
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
  width:50%

}
.separated-button {
  margin: 10px;
}

.active-tab {
  color: #c61818;
  background-color:white ;

}

</style>
