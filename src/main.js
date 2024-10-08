import { createApp } from 'vue'
import App from './app.vue'

// PrimeVue básico (solo si realmente lo necesitas)
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import './style.css';  // Importa Tailwind después de PrimeVue
import 'tailwindcss/tailwind.css';  // Tailwind se carga después

// Importar PrimeVue si es estrictamente necesario (sin servicios adicionales)
import PrimeVue from "primevue/config";

// Tailwind CSS (Importa Tailwind después de los estilos de PrimeVue)
import './style.css';  // Asegúrate de que contiene las directivas de Tailwind
import 'tailwindcss/tailwind.css';  // Importar Tailwind directamente

// Router
import router from "./router/index.js";

// Crear la aplicación Vue
createApp(App)
    .use(PrimeVue, { ripple: true })  // Mantén PrimeVue solo si lo necesitas
    .use(router)
    .mount('#app');
