import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from '../views/login/Login.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "about" */ '../views/order/Order.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
