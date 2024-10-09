<script>
import { defineComponent } from "vue";
import ToolbarComponent from "./public/components/toolbar-component.vue";
import Footer from "./public/components/footer-component-f.vue";
export default defineComponent({
  components: { ToolbarComponent, Footer } 
});
</script>

<template>
  <toolbar-component></toolbar-component>
  <router-view />
  <Footer></Footer>
</template>
