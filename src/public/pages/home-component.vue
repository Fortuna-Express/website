<template>
  <div class="flex sm:flex-col md:flex-row lg:flex-row justify-center mt-20 gap-4 items-center">
    <div class="w-64 h-60 border-4 border-red-700 b-4 rounded">
      <div class="p-4 h-full flex flex-col justify-between">
        <img src="../../../assets/gps.svg" alt="GPS Logo" class="w-full h-24 object-contain rounded-md">
        <p class="font-bold text-center mt-2 text-lg">GPS</p>
        <div class="flex justify-between mt-2 gap-2">
          <a href="https://cloud.securitasfleet.com/visitor/bf71a8a1-7196-4d64-bbad-83fc2bac76d2/assets" target="_blank" class="inline-block bg-red-700 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm shadow-md transition-colors duration-300">B7A-714</a>
          <a href="https://cloud.securitasfleet.com/visitor/317bdd31-6e48-4d71-b5f9-d273767ffffb/assets" target="_blank" class="inline-block bg-red-700 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm shadow-md transition-colors duration-300">C3W-837</a>
        </div>
      </div>
    </div>

    <router-link to="/liquidations">
      <div class="w-64 h-60 border-4 border-red-700 b-4 rounded">
        <div class="p-4 h-full flex flex-col justify-between">
          <img src="../../../assets/liquidations.png" alt="Liquidations Logo" class="w-full h-36 ml-2 object-contain rounded-md">
          <p class="font-bold text-center mt-2 text-lg">Liquidaciones</p>
        </div>
      </div>
    </router-link>

    <a href="https://api-seguridad.sunat.gob.pe/v1/clientessol/4f3b88b3-d9d6-402a-b85d-6a0bc857746a/oauth2/loginMenuSol?originalUrl=https://e-menu.sunat.gob.pe/cl-ti-itmenu/AutenticaMenuInternet.htm&state=rO0ABXNyABFqYXZhLnV0aWwuSGFzaE1hcAUH2sHDFmDRAwACRgAKbG9hZEZhY3RvckkACXRocmVzaG9sZHhwP0AAAAAAAAx3CAAAABAAAAADdAAEZXhlY3B0AAZwYXJhbXN0AEsqJiomL2NsLXRpLWl0bWVudS9NZW51SW50ZXJuZXQuaHRtJmI2NGQyNmE4YjVhZjA5MTkyM2IyM2I2NDA3YTFjMWRiNDFlNzMzYTZ0AANleGVweA==">
      <div class="w-64 h-60 border-4 border-red-700 b-4 rounded">
        <div class="p-4 h-full flex flex-col justify-between">
          <img src="../../../assets/sunat.png" alt="SUNAT Logo" class="w-full h-36 object-contain rounded-md">
          <p class="font-bold text-center mt-2 text-lg">SUNAT</p>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>


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
<script setup lang="ts">
</script>