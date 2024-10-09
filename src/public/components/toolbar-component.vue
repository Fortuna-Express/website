<template>
  <nav class="bg-white shadow p-4 relative">
    <div class="container mx-auto flex justify-between items-center">

      <!-- Logo (con click para desplegar menú en pantallas pequeñas) -->
      <div class="flex items-center justify-center w-full lg:w-auto">
        <button @click="toggleMenu" class="focus:outline-none">
          <img class="h-12 w-auto" src="/assets/fort.png" alt="Company Logo">
        </button>
      </div>

      <!-- Menú para pantallas grandes -->
      <div class="hidden lg:flex space-x-8">
        <a href="#" class="inline-flex items-center border-b-2 border-transparent px-3 text-xl font-medium text-black hover:border-red-500 hover:text-gray-800 transition-all duration-300 ease-in-out">
          Monitero
        </a>
        <a href="#" class="inline-flex items-center border-b-2 border-transparent px-3 text-xl font-medium text-black hover:border-red-500 hover:text-gray-800 transition-all duration-300 ease-in-out">
          Admin
        </a>
      </div>

    </div>

    <!-- Menú desplegable (visible cuando se hace clic en el logo en pantallas pequeñas) -->
    <div :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" 
         class="absolutescale-95 lg:hidden">
      <a href="#" class="block px-4 py-2 text-lg font-semibold text-gray-900  text-center">
        Monitero
      </a>
      <a href="#" class="block px-4 py-2 text-lg font-semibold text-gray-900  text-center">
        Admin
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false, // Estado del menú desplegable
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Alterna la visibilidad del menú
    },
  },
};
</script>
