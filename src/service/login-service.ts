import httpRequest from '@/utils/request';
import { UserLoginPrams } from '@/types/login';

class UserFetchServe {
    /**
     * 请求登录
     * @param params
    */
    public fetchUserLogin(params: UserLoginPrams) {
        let loginSign!: string;
        for (let i = 0; i < 16; i++) {
            const _code = Math.floor(Math.random() * 10);
            loginSign = `${loginSign ? loginSign : ''}${_code}`;
        }
        return httpRequest({
            url: '/auth/login',
            data: { ...params, loginSign },
        });
    }
    /* 
    获取用户信息
    */
    public fetchUserInfo() {
        return httpRequest({ url: '/user/userInfo' });
    }
}
export default new UserFetchServe();
