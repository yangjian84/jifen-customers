<template>
    <div>
        <a-modal
            title="来电记录"
            :visible="visible"
            @ok="$emit('handleOk')"
            @cancel="$emit('handleCancel')"
            ok-text="确认"
            cancel-text="取消"
            width="700px"
        >
            <a-form :label-col="{ span: 3 }" :wrapper-col="{ span: 21 }" labelAlign="left">
                <a-form-item label="客户姓名" id="name" :required="true">
                    <a-input></a-input>
                </a-form-item>
                <a-form-item label="来电号码" id="mobile" :required="true">
                    <a-input></a-input>
                </a-form-item>
                <a-form-item label="客户问题" id="question" :required="true">
                    <a-textarea></a-textarea>
                </a-form-item>
                <a-form-item label="处理结果" id="effect" :required="true">
                    <a-textarea></a-textarea>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component({
    components: {},
})
export default class ExpressPage extends Vue {
    @Prop() private visible!: boolean;
}
</script>
<style lang="less" scoped></style>
