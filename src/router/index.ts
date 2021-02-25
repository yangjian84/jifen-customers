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
        meta: {
            title: '登录',
        },
        // children: [
        //     {
        //         path: '/',
        //         name: 'Login',
        //         component: Login,
        //     },
        // ],
    },
    
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;
