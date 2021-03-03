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

/**
 *
 */
export interface UserLoginPrams {
    loginSign: string;
    username: string;
    password: string;
}

/**
 * 更改密码
 */
export interface ChangePassParams {
    username: string;
    password: string;
    oldPassword: string;
}
