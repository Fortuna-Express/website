import HomeComponent from "../public/pages/home-component.vue";
import {createRouter, createWebHistory} from "vue-router";
import TableComponent from "../fortuna/components/table-component.vue";

const router= createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/monitoring', component: HomeComponent, meta: { title: 'Home'}},
        { path: '/admin', component: TableComponent, meta: { title: 'Trucks'}},

    ]
});
export default router;