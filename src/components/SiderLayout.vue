<template>
    <a-layout-sider breakpoint="lg" collapsed-width="0">
        <div class="logo">
            <a-icon type="chrome" />
        </div>
        <a-menu theme="dark" mode="inline">
            <a-menu-item>
                <a-icon type="unordered-list" />
                <span class="nav-text">订单查询</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({
    components: {},
})
export default class SiderPage extends Vue {}
</script>
<style lang="scss" scoped>
.logo {
    height: 80px;
    display: flex;
    align-items: center;
    font-size: 28px;
    color: white;
    justify-content: center;
}
</style>
