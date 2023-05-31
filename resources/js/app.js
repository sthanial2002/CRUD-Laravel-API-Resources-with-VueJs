import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from "vue";
import router from './router';

import DeveloperIndex from './components/DeveloperIndex.vue';


export default createApp({
    component:{
        DeveloperIndex
    }
}).use(router)
  .mount('#app');
