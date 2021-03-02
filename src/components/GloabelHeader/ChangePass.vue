<template>
    <a-modal
        :visible="visible"
        title="修改密码"
        ok-text="确认"
        cancel-text="取消"
        @ok="$emit('okclick')"
        @cancel="$emit('cancelclick')"
    >
        <a-form :form="form">
            <a-form-item>
                <a-input
                    :disabled="true"
                    placeholder="customer"
                    v-decorator="[
                        'username',
                        {
                            rules: [
                                {
                                    required: true,
                                    message: 'Username is required!',
                                },
                            ],
                        },
                    ]"
                >
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input-password
                    placeholder="旧密码"
                    v-decorator="[
                        'password',
                        {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入旧密码',
                                },
                            ],
                        },
                    ]"
                >
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                </a-input-password>
            </a-form-item>
            <a-form-item>
                <a-input-password
                    placeholder="新密码"
                    v-decorator="[
                        'newpassword',
                        {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入新密码',
                                },
                            ],
                        },
                    ]"
                >
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                </a-input-password>
            </a-form-item>
        </a-form>
    </a-modal>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { WrappedFormUtils } from 'ant-design-vue/types/form/form';

@Component({
    components: {},
})
export default class ChangePage extends Vue {
    @Prop() private visible!: boolean;
    private form!: WrappedFormUtils;

    created() {
        this.initFomr();
    }
    /**
     * 验证表单
     */
    initFomr() {
        this.form = this.$form.createForm(this, { name: 'changpassword' });
    }
    /**
     * 确认提交修改密码
     */
    // @Emit('okclick') okModal() {
        
    // }
    // @Emit('cancelclick') cancelModal() {}
}
</script>
<style lang="scss" scoped></style>
