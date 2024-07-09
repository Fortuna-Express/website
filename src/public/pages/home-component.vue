<template>
  <div class="container">
    <div class="red-border">
      <img src="../../assets/gps.svg" alt="GPS Logo" class="logo" style="border-radius: 15px; margin-top: 20%;">
      <p class="title">GPS</p>
    </div>
    <div class="red-border">
      <img src="../../assets/liquidations.png" alt="Liquidations Logo" class="logo">
      <p class="title">Liquidations</p>
    </div>
    <div class="red-border">
      <img src="../../assets/sunat.png" alt="SUNAT Logo" class="logo">
      <p class="title">SUNAT</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: flex-start; /* Alinea los elementos arriba */
  height: 80vh;
  flex-wrap: wrap;
  margin-top: 5%;
  margin-bottom: 5%;
}

.red-border {
  width: 250px; /* Ancho un poco más grande */
  height: 280px; /* Altura un poco menos larga */
  padding: 20px;
  border: 5px solid #c30505;
  box-sizing: border-box; /* Asegura que el padding no afecte el tamaño total */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Alinea el contenido al inicio del contenedor */
  align-items: center;
  margin: 10px; /* Separación entre los cuadros */
  border-radius: 8px; /* Hace que solo las puntas sean redondas */
  transition: transform 0.3s; /* Agrega una transición suave */
}

.red-border:hover {
  transform: scale(1.05); /* Aumenta el tamaño del elemento al pasar el mouse */
}

.logo {
  width: 80%; /* Tamaño reducido para las imágenes */
  height: auto;
  max-width: 100%; /* Ajuste para asegurar el tamaño máximo */
}

.title {
  margin-top: auto; /* Empuja el título hacia el final del contenedor */
  font-size: 20px; /* Tamaño del texto del título */
  font-weight: bold; /* Texto en negrita */
}
</style>
