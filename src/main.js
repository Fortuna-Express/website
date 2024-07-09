import { createApp } from 'vue'
import './style.css'
import 'tailwindcss/tailwind.css';
import App from './app.vue'
// PrimeVue
import PrimeVue from "primevue/config";

// PrimeVue CSS
import 'primeflex/primeflex.css';

// PrimeIcons
import 'primeicons/primeicons.css';
// PrimeVue Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';


import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";
import ToastService from "primevue/toastservice";
import Card from "primevue/card";
import ConfirmDialog from "primevue/confirmdialog";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import FileUpload from "primevue/fileupload";
import FloatLabel from "primevue/floatlabel";
import InputIcon from "primevue/inputicon";
import IconField from "primevue/iconfield";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import InputNumber from "primevue/inputnumber";
import Menu from "primevue/menu";
import Row from "primevue/row";
import Rating from "primevue/rating";
import Sidebar from "primevue/sidebar";
import Tag from "primevue/tag";
import Toast from "primevue/toast";
import SelectButton from "primevue/selectbutton";
import Textarea from "primevue/textarea";
import Toolbar from "primevue/toolbar";
import router from "./router/index.js";

createApp(App)
    .use(PrimeVue, { ripple: true})
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService)
    .use(router)
    .component('pv-button', Button)
    .component('pv-column', Column)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-checkbox', Checkbox)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-dropdown', Dropdown)
    .component('pv-file-upload', FileUpload)
    .component('pv-float-label', FloatLabel)
    .component('pv-icon-field', IconField)
    .component('pv-input-icon', InputIcon)
    .component('pv-input-text', InputText)
    .component('pv-input-number', InputNumber)
    .component('pv-menu', Menu)
    .component('pv-rating', Rating)
    .component('pv-row', Row)
    .component('pv-sidebar', Sidebar)
    .component('pv-tag', Tag)
    .component('pv-textarea', Textarea)
    .component('pv-toolbar', Toolbar)
    .component('pv-toast', Toast)
    .component('pv-select-button', SelectButton)
    .mount('#app')
