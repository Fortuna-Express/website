<template>
  
  <nav class="bg-white shadow p-4">
  <div class="container mx-auto flex justify-between items-center">
    
    <!-- Logo -->
    <div class="flex items-center">
      <img class="h-16 w-auto" src="/assets/fort.png" alt="Company Logo">
    </div>

    <div class="hidden lg:flex space-x-8">
      <a href="#" class="inline-flex items-center border-b-2 border-transparent px-3  text-xl font-medium text-black hover:border-red-500 hover:text-gray-800 focus:outline-none focus:border-gray-500">
        Monitero
      </a>
      <a href="#" class="inline-flex items-center border-b-2 border-transparent px-3 text-xl font-medium text-black hover:border-red-500 hover:text-gray-800 focus:outline-none focus:border-gray-500">
        Admin
      </a>
    </div>

  </div>

 
</nav>








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

