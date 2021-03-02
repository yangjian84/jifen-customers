<template>
    <div class="login">
        <a-form :form="form" class="login-form" @submit="handleSubmit">
            <a-form-item>
                <a-input
                    v-decorator="[
                        'username',
                        {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ],
                        },
                    ]"
                    placeholder="Username"
                >
                    <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input
                    v-decorator="[
                        'password',
                        {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ],
                        },
                    ]"
                    type="password"
                    placeholder="Password"
                >
                    <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-button block type="primary" html-type="submit" class="login-form-AntdButton">
                    Log in
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { WrappedFormUtils } from 'ant-design-vue/types/form/form';
import { UserLoginPrams } from '@/types/login';
import CryptoJS from 'crypto-js';
import { notification } from 'ant-design-vue';

@Component({
    components: {},
})
export default class LoginPage extends Vue {
    private form!: WrappedFormUtils;

    created() {
        this.initFomr();
    }

    initFomr() {
        this.form = this.$form.createForm(this, { name: 'register' });
    }

    /**
     *提交表单
     */
    handleSubmit(e: Event) {
        e.preventDefault();
        this.form.validateFields((error: null | Error[], values: UserLoginPrams) => {
            if (!error) {
                const secret = new Date().toJSON().split(':')[0];
                if (values.password) {
                    values.password = CryptoJS.AES.encrypt(values.password, secret).toString();
                }

                this.$store
                    .dispatch({ type: 'login/fetchLogin', params: values })
                    .then((res) => {
                        notification.success({
                            message: res.message,
                            description: '',
                        });
                        this.$router.push('/order');
                    })
                    .catch((error) => {
                        notification.error({
                            message: error.data.message,
                            description: '',
                        });
                    });
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg) no-repeat;
    .login-form {
        width: 400px;
        padding: 40px;
        display: block;
        background: white;
        .login-form {
            max-width: 300px;
        }
        .login-form-forgot {
            float: right;
        }
        .login-form-button {
            width: 100%;
        }
    }
}
</style>
