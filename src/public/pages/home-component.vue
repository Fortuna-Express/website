<template>
  <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center mt-12 gap-8 items-center md:px-4 px-0 lg:py-20 py-0 mb-12">
    <!-- GPS Card -->
    <div class="w-64 h-60 border-4 border-primary rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
  <div class="p-4 h-full flex flex-col justify-between">
    
    <!-- Sección 1: Imagen -->
    <div class="flex-1 flex justify-center">
      <img src="../../../assets/gps.svg" alt="GPS Logo" class="w-full h-full rounded-md">
    </div>
    
    <!-- Sección 2: Texto -->
    <div class="flex-1 mt-2">
      <p class="font-bold text-center text-lg text-gray-800">GPS</p>
    </div>
    
    <!-- Sección 3: Enlaces -->
    <div class= "flex justify-between ">
      <a href="https://cloud.securitasfleet.com/visitor/bf71a8a1-7196-4d64-bbad-83fc2bac76d2/assets" target="_blank" class="inline-block bg-primary hover:bg-red-500 text-white  px-3 rounded-md text-sm shadow-md transition-colors duration-300">
        B7A-714
      </a>
      <a href="https://cloud.securitasfleet.com/visitor/317bdd31-6e48-4d71-b5f9-d273767ffffb/assets" target="_blank" class="inline-block bg-primary hover:bg-red-500 text-white py-1 px-3 rounded-md text-sm shadow-md transition-colors duration-300">
        C3W-837
      </a>
    </div>
    
  </div>
</div>


    <!-- Liquidations Card -->
    <router-link to="/liquidations" class="w-64 h-60 border-4 border-primary rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div class="p-4 h-full flex flex-col justify-between">
        <img src="../../../assets/liquidations.png" alt="Liquidations Logo" class="w-full h-36 object-contain rounded-md">
        <p class="font-bold text-center mt-4 text-lg text-gray-800">Liquidaciones</p>
      </div>
    </router-link>

    <!-- SUNAT Card -->
    <a href="https://api-seguridad.sunat.gob.pe/v1/clientessol/4f3b88b3-d9d6-402a-b85d-6a0bc857746a/oauth2/loginMenuSol?originalUrl=https://e-menu.sunat.gob.pe/cl-ti-itmenu/AutenticaMenuInternet.htm&state=rO0ABXNyABFqYXZhLnV0aWwuSGFzaE1hcAUH2sHDFmDRAwACRgAKbG9hZEZhY3RvckkACXRocmVzaG9sZHhwP0AAAAAAAAx3CAAAABAAAAADdAAEZXhlY3B0AAZwYXJhbXN0AEsqJiomL2NsLXRpLWl0bWVudS9NZW51SW50ZXJuZXQuaHRtJmI2NGQyNmE4YjVhZjA5MTkyM2IyM2I2NDA3YTFjMWRiNDFlNzMzYTZ0AANleGVweA==" class="w-64 h-60 border-4 border-primary rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div class="p-4 h-full flex flex-col justify-between">
        <img src="../../../assets/sunat.png" alt="SUNAT Logo" class="w-full h-36 object-contain rounded-md">
        <p class="font-bold text-center mt-4 text-lg text-gray-800">SUNAT</p>
      </div>
    </a>
  </div>
</template>
