import HomeComponent from "../public/pages/home-component.vue";
import {createRouter, createWebHistory} from "vue-router";
import TableComponent from "../fortuna/components/table-component.vue";
import LiquidationView from "../fortuna/components/liquidation-view.vue";

const router= createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/monitoring', component: HomeComponent, meta: { title: 'Home' } },
        { path: '/admin', component: HomeComponent, meta: { title: 'Trucks' } },
        { path: '/:pathMatch(.*)*', redirect: '/monitoring' },
        { path: '/liquidations', component: TableComponent, meta: { title: 'Trucks' } },
        { path: '/liquidation', component: LiquidationView, meta: { title: 'Trucks' } },

    ]
});
export default router;