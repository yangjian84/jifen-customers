<template>
    <a-layout-header class="header">
        <a-space direction="horizontal">
            <a-dropdown>
                <div>
                    <a-space direction="horizontal">
                        <a-avatar :size="36" icon="user" />
                        <span>{{ userInfo.name }}</span>
                    </a-space>
                </div>
                <a-menu slot="overlay">
                    <a-menu-item>
                        <a @click="changClick">修改密码 </a>
                        <ChangePassWord
                            :visible="visible_change"
                            @okclick="changClick"
                            @cancelclick="changClick"
                        ></ChangePassWord>
                    </a-menu-item>
                    <a-menu-item>
                        <a @click="logOut">退出登录</a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
        </a-space>
    </a-layout-header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChangePassWord from '@/components/GloabelHeader/ChangePass.vue';
// import { ChangePassParams } from '@/types/login';
// import { notification } from 'ant-design-vue';

@Component({
    components: { ChangePassWord },
})
export default class BasicPage extends Vue {
    private visible_change = false;
    /**
     * 获取用户信息
     */
    private get userInfo() {
        return this.$store.getters['login/getUserInfo']();
    }
    /**
     * 第二种写法
     */
    // private get userInfo() {
    //     return this.$store.state.login.userInfo;
    // }

    /**
     * 修改密码弹窗
     */
    changClick() {
        this.visible_change = !this.visible_change;
    }
    /**
     * 退出登录
     */
    logOut() {
        this.$store.commit({ type: 'login/CHANGE_LOGIN_STATUS', payload: { login: false } });
        localStorage.clear();
        this.$router.push('/');
    }
    /**
     * 确认
     */
    // okModal(values: ChangePassParams) {
    //     this.visible_ = false;
    //     if (this.visible_) {
    //         const secret = new Date().toJSON().split(':')[0];
    //         values.password &&
    //             (values.password = CryptoJS.AES.encrypt(values.password, secret).toString());
    //         values.oldPassword &&
    //             (values.oldPassword = CryptoJS.AES.encrypt(values.oldPassword, secret).toString());
    //         this.$store
    //             .dispatch({ type: 'login/fetchChangePassword', params: values })
    //             .then((res) => {
    //                 notification.success({ message: res.message, description: '' });
    //                 this.$router.push('/order')
    //             });
    //     }
    // }
    
}
</script>
<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: #fff;
    padding: 0 20px;
}
</style>
