<template>
    <div>
        <a-drawer
            title="来电记录"
            placement="right"
            :closable="false"
            :visible="visible"
            @close="$emit('handleClose')"
            width="500px"
        >

        </a-drawer>
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
