import Vue from 'vue';
import Vuex from 'vuex';
import loginMoudel, { UserModelState } from './login';

Vue.use(Vuex);
export interface RootState {
    login: UserModelState;
}
export default new Vuex.Store({
    modules: {
        login: loginMoudel,
    },
});
