<template>
  <div class="toolbar-container">
    <!-- Logo -->
    <div class="logo-container">
      <img src="/assets/fort.png" alt="Fortuna Express S.A.C Logo" class="logo">
    </div>

    <!-- Botón de menú hamburguesa -->
    <button @click="isNavOpen = !isNavOpen" class="hamburger-button md:hidden">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Enlaces de navegación -->
    <div :class="{ 'nav-open': isNavOpen }" class="nav-links md:flex md:space-x-4">
      <router-link
          v-for="(item, index) in items"
          :key="index"
          :to="item.to"
          class="toolbar-link"
          @click.native="closeNav"
      >
        {{ item.label }}
        <span></span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ToolbarComponent",
  data() {
    return {
      isNavOpen: false,
      items: [
        { label: "MONITORING", to: "/monitoring" },
        { label: "ADMIN", to: "/admin" },
      ],
    };
  },
  methods: {
    closeNav() {
      this.isNavOpen = false;
    },
  },
};
</script>

<style scoped>
.toolbar-container {
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 10px 20px;
}

.logo {
  height: 70px;
}

.hamburger-button {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  position: absolute;
  top: 15px;
  right: 15px;
}

.hamburger-button span {
  width: 2rem;
  height: 0.25rem;
  background: #cc0000;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.nav-links {
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(251, 251, 251, 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.nav-links.nav-open {
  transform: translateX(0);
}

@media screen and (min-width: 768px) {
  .hamburger-button {
    display: none;
  }

  .nav-links {
    position: static;
    height: auto;
    width: auto;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    transform: translateX(0);
  }
}

.toolbar-link {
  position: relative;
  padding: 8px 10px;
  text-decoration: none;
  font-weight: bold;
  color: #000000;
}

.toolbar-link:hover {
  color: #b30909; /* Color del texto al pasar el cursor */
}

.toolbar-link span {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.5px; /* Grosor del subrayado */
  background-color: transparent; /* Color inicial del subrayado */
  transition: background-color 0.3s ease; /* Transición suave del color */
}

.toolbar-link:hover span {
  background-color: #b30909; /* Color del subrayado al pasar el cursor */
}
</style>