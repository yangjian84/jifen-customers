import { Module } from 'vuex';
import userFetchServe from '@/service/login-service';
import { UserLoginPrams } from '@/types/login';
import { RootState } from '.';

export interface UserInfo {
    username: string;
    name: string;
    authorized: 'admin' | 'user';
    mobile: string;
    cuid: number;
}

export interface UserModelState {
    userInfo: UserInfo;
    loginStatus: boolean;

}

const loginModule: Module<UserModelState, RootState> = {
    namespaced: true,
    state: {
        userInfo: {} as UserInfo,
        loginStatus: false,
 
    },
    mutations: {
        CHANGE_USER_INFO(state, { payload: { userInfo } }) {
            return { ...state, userInfo } as UserModelState;
        },
        CHANGE_LOGIN_STATUS(state, { payload: { login } }) {
            return { ...state, loginStatus: login } as UserModelState;
        },
    },
    actions: {
        fetchUserInfo({ commit }, _) {
            return userFetchServe.fetchUserInfo().then((response) => {
                if (response?.data?.entity) {
                    const {
                        data: { entity },
                    } = response;
                    commit({ type: 'CHANGE_LOGIN_STATUS', payload: { login: true } });
                    commit({ type: 'CHANGE_USER_INFO', payload: { userInfo: entity ?? {} } });
                }
            });
        },
        fetchLogin({ commit }, { params }) {
            const data = params as UserLoginPrams;
            return userFetchServe.fetchUserLogin(data).then((response) => {
                if (response?.data?.entity) {
                    const {
                        data: { entity, token, message },
                    } = response;
                    token && localStorage.setItem('TOKEN', token);
                    entity?.login &&
                        commit({
                            type: 'CHANGE_LOGIN_STATUS',
                            payload: { login: true, ...entity },
                        });
                    return { message };
                }
                return { message: 'Error' };
            });
        },
    },

};
export default loginModule;
