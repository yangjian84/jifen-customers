import { Module } from 'vuex';
import userFetchServe from '@/service/login-service';
import { UserLoginPrams } from '@/types/login';
import { RootState } from '.';

/**
 * 用户信息
 */
export interface UserInfo {
    username: string;
    name: string;
    authorized: 'admin' | 'user';
    mobile: string;
    cuid: number;
}

export interface UserModelState {
    userInfo: UserInfo; //用户信息
    loginStatus: boolean; //登录状态
}

export const loginModule: Module<UserModelState, RootState> = {
    namespaced: true,
    state: {
        userInfo: {} as UserInfo,
        loginStatus: false,
    },
    mutations: {
        CHANGE_USER_INFO(state, { payload: { userInfo } }) {
            state.userInfo = userInfo;
        },

        /**
         * 改变登录状态
         */
        CHANGE_LOGIN_STATUS(state, { payload: { login } }) {
            state.loginStatus = login;
        },
    },
    actions: {
        /**
         * 获取用户信息
         */
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
        /**
         * 获取登录信息
         */
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
        /**
         * 修改密码
         */
        fetchChangePassword(_, { params }) {
            return userFetchServe.fetchChangePassword(params).then((response) => {
                if (response) {
                    return { message: response?.data?.message };
                }
                return { message: 'Error' };
            });
        },
    },
    getters: {
        /**
         * 获取用户信息
         */
        // getUserInfo(state) {
        //     return (id: number) => {
        //         return state.userInfoList.find((item) => item.cuid === id);
        //     };
        // },
        getUserInfo: (state) => () => {
            return state.userInfo;
        },
    },
};
