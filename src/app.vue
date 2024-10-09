<script >
import {defineComponent} from "vue";
import ToolbarComponent from "./public/components/toolbar-component.vue";

export default defineComponent({
  components: {ToolbarComponent}
})
</script>

<template>
  <toolbar-component></toolbar-component>
<router-view/> 

</template>
