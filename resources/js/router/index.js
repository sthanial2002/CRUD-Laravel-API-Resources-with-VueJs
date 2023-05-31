import { createRouter, createWebHistory } from "vue-router";

import DeveloperIndex from '../components/DeveloperIndex.vue';
import DeveloperCreate from '../components/DeveloperCreate.vue';
import DeveloperUpdate from '../components/DeveloperUpdate.vue';



const routes = [
    {
        path: '/dashboard',
        name: 'developers.index',
        component: DeveloperIndex
    },
    {
        path: '/developers/create',
        name: 'developers.store',
        component: DeveloperCreate
    },
    {
        path: '/developers/:id/update',
        name: 'developers.update',
        component: DeveloperUpdate,
        props:true
    }
];

export default createRouter(
    {
        history: createWebHistory(),
        routes
    }
);