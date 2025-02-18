// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Tab1 from '../components/Tab1.vue';
import Tab2 from '../components/Tab2.vue';
import Tab3 from '../components/Tab3.vue';
import Tab4 from '../components/Tab4.vue';



const routes = [
  { path: '/', redirect: '/tab1' },
  { path: '/tab1', component: Tab1 },
  { path: '/tab2', component: Tab2 },
  { path: '/tab3', component: Tab3 },
  { path: '/tab4', component: Tab4 }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
