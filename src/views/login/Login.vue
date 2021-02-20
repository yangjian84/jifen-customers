<template>
    <div class="login">
        <div class="form">
            <Form
                id="components-form-demo-normal-login"
                :form="form"
                class="login-form"
                @submit="handleSubmit"
            >
                <FormItem class="item">
                    <Input
                        v-decorator="[
                            'userName',
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
                        <Icon
                            slot="prefix"
                            type="user"
                            style="color: rgba(0, 0, 0, 0.25)"
                        />
                    </Input>
                </FormItem>
                <FormItem class="item">
                    <Input
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
                        <Icon
                            slot="prefix"
                            type="lock"
                            style="color: rgba(0, 0, 0, 0.25)"
                        />
                    </Input>
                </FormItem>
                <FormItem>
                    <Checkbox
                        v-decorator="[
                            'remember',
                            {
                                valuePropName: 'checked',
                                initialValue: true,
                            },
                        ]"
                    >
                        Remember me
                    </Checkbox>
                    <a class="login-form-forgot" href=""> Forgot password </a>
                    <Button
                        type="primary"
                        html-type="submit"
                        class="login-form-button"
                    >
                        Log in
                    </Button>
                    Or
                    <a href=""> register now! </a>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Form, Button, Icon, Input, Checkbox } from 'ant-design-vue';
@Component({
    components: { Form, Button, Icon, Input, Checkbox },
})
export default class LoginPage extends Vue {}
</script>

<style lang="scss" scoped>
.login {
    height: 937px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg)
        no-repeat;
    .form {
        width: 400px;
        padding: 40px;
        display: block;
        background: white;
        
    }
    #components-form-demo-normal-login .login-form {
        max-width: 300px;
    }
    #components-form-demo-normal-login .login-form-forgot {
        float: right;
    }
    #components-form-demo-normal-login .login-form-button {
        width: 100%;
    }
}
</style>
