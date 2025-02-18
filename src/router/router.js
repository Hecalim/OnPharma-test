// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Tab1 from '../components/Tab1.vue';
import Tab2 from '../components/Tab2.vue';


const routes = [
  { path: '/', redirect: '/tab1' },
  { path: '/tab1', component: Tab1 },
  { path: '/tab2', component: Tab2 }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
