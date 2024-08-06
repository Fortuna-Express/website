<template>
  <div class="flex items-center justify-between px-4 py-2 bg-700 relative">
    <!-- Logo -->
      <img 
        src="/assets/fort.png" 
        alt="Fortuna Express S.A.C Logo" 
        class="md:w-80 lg:w-3 sm:w-80 justify-center"
        @click="toggleMenu"
      />

    <!-- Menú hamburguesa (visible en pantallas pequeñas) -->
    <button 
      class="lg:hidden p-2"
      @click="toggleMenu"
    >
   
    </button>

    <!-- Menú principal (visible en pantallas md y lg) -->
    <div class="hidden md:flex gap-4">
      <a href="/monitoring" class="text-2xl font-roboto font-semibold mt-2 underline">Monitero</a>
      <div>
        <button class="btn-primary ">Admin</button>
      </div>
    </div>

    <!-- Menú desplegable (oculto por defecto) -->
    <div v-if="isMenuOpen"  
    class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white p-4 shadow-lg w-64 md:w-auto lg:hidden z-50 text-center sm:px-4 rounded-lg border border-gray-200"
    >
    
    
    <a href="/monitoring" class="block text-sm font-roboto font-semibold mt-2 underline">Monitero</a>
      <div class="mt-2">
        <button class="btn-primary  py-1 px-2 text-xs">Admin</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolbarComponent",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Agrega estilos si es necesario */
</style>
