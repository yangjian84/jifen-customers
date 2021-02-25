<template>
        <AntdLayout id="order">
            <AntdSider breakpoint="lg" collapsed-width="0">
                <div class="logo">
                    <AntdIcon type="chrome" />
                </div>
                <AntdMenu theme="dark" mode="inline">
                    <AntdMenuItem>
                        <AntdIcon type="unordered-list" />
                        <span class="nav-text">订单查询</span>
                    </AntdMenuItem>
                </AntdMenu>
            </AntdSider>
            <AntdLayout>
                <AntdHeader class="header">
                    <AntdSpace direction="horizontal">
                        <AntdDropdown>
                            <div>
                                <AntdSpace direction="horizontal">
                                    <AntdAvatar :size="36" icon="user" />
                                    <span>{name}</span>
                                </AntdSpace>
                            </div>
                            <AntdMenu slot="overlay">
                                <AntdMenuItem>
                                    <a>修改密码</a>
                                </AntdMenuItem>
                                <AntdMenuItem>
                                    <a>退出登录</a>
                                </AntdMenuItem>
                            </AntdMenu>
                        </AntdDropdown>
                    </AntdSpace>
                </AntdHeader>
                <AntdContent :style="{ margin: '24px 16px 0' }">
                    <div class="content">
                        content
                    </div>
                </AntdContent>
            </AntdLayout>
        </AntdLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Layout, Menu, Space, Icon, Dropdown, Avatar } from 'ant-design-vue';

@Component({
    components: {
        AntdLayout: Layout,
        AntdSider: Layout.Sider,
        AntdMenu: Menu,
        AntdHeader: Layout.Header,
        AntdSpace: Space,
        AntdMenuItem: Menu.Item,
        AntdIcon: Icon,
        AntdDropdown: Dropdown,
        AntdAvatar: Avatar,
        AntdContent: Layout.Content,
    },
})
export default class OrderPage extends Vue {}
</script>

<style lang="scss" scoped>
#order {
    height: 100%;

    .content {
        padding: 16px;
        background: #fff;
        min-height: 360px;
    }
    .logo {
        height: 80px;
        display: flex;
        align-items: center;
        font-size: 28px;
        color: white;
        justify-content: center;
    }
    .header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background: #fff;
        padding: 0 20px;
    }
}
</style>
