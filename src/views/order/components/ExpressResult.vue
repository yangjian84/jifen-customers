<template>
    <div>
        <a-modal
            title="物流信息"
            :visible="visible"
            @ok="$emit('handleOk')"
            @cancel="$emit('handleCancel')"
            ok-text="确认"
            cancel-text="取消"
        >
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
