<template>
    <a-layout id="order">
        <SiderLayout></SiderLayout>
        <a-layout>
            <HeaderLayout></HeaderLayout>
            <a-layout-content :style="{ margin: '24px 16px 0' }">
                <div class="content">
                    content
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderLayout from '@/components/GloabelHeader/HeaderLayout.vue';
import SiderLayout from '@/components/SiderLayout.vue';

@Component({
    components: { HeaderLayout,SiderLayout },
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
    
    
}
</style>
