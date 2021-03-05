import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login/Login.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/login',
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
    ],
});
router.beforeEach((to,form,next)=>{
    if(to.path ==='/login') return next();
    const tokenStr = window.localStorage.getItem('TOKEN');
    if(!tokenStr) return next('/login')
    next()

})
export default router;
