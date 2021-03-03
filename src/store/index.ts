import Vue from 'vue';
import Vuex from 'vuex';

import { loginModule } from './login';
import { orderModule } from './order';
import { UserModelState } from '@/types/login';
import { OrderModelState } from '@/types/order';

Vue.use(Vuex);

export interface RootState {
    login: UserModelState;
    order: OrderModelState;
}

export default new Vuex.Store({
    modules: {
        login: loginModule,
        order: orderModule,
    },
});
