<template>
    <a-layout-header class="header">
        <a-space direction="horizontal">
            <a-dropdown>
                <div>
                    <a-space direction="horizontal">
                        <a-avatar :size="36" icon="user" />
                        <span>号称科技</span>
                    </a-space>
                </div>
                <a-menu slot="overlay">
                    <a-menu-item>
                        <a @click="showModal">修改密码 </a>
                        <ChangePassWord :visible="visible_" @hdclick="hideModal_"></ChangePassWord>
                    </a-menu-item>
                    <a-menu-item>
                        <a>退出登录</a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
        </a-space>
    </a-layout-header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChangePassWord from '@/components/GloabelHeader/ChangePass.vue';

@Component({
    components: { ChangePassWord },
})
export default class BasicPage extends Vue {
    private visible_ = false;
    showModal() {
        this.visible_ = true;
    }
    hideModal_() {
        this.visible_ = false;
    }
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
