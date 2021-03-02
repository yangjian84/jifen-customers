/**
 *
 */
export interface UserLoginPrams {
    loginSign: string;
    username: string;
    password: string;
}

export interface ChangePassParams {
    username: string;
    password: string;
    oldPassword: string;
}
