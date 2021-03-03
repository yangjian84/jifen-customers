<template>
    <div id="app">
        <router-view class="router-view" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({})
export default class AppPage extends Vue {
    /**
     * 获取用户信息
     */
    created() {
        this.getUserInfo();
    }

    private get routerUrl() {
        return this.$route.path;
    }

    getUserInfo() {
        this.$watch('routerUrl', (value: string, oldValue: string) => {
            const isLoginPath = value === '/';
            !isLoginPath && this.$store.dispatch({ type: 'login/fetchUserInfo' });
        });
    }
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}
html,
body,
#app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
</style>
