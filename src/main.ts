import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import { Form, Button, Icon, Input, Layout, Menu, Space, Dropdown, Avatar,Modal } from 'ant-design-vue';
Vue.use(Form);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Layout);
Vue.use(Dropdown);
Vue.use(Space);
Vue.use(Menu);
Vue.use(Avatar);
Vue.use(Modal);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
