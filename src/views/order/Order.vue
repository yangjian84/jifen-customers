<template>
    <a-layout id="order">
        <SiderLayout></SiderLayout>
        <a-layout>
            <HeaderLayout></HeaderLayout>
            <a-layout-content :style="{ margin: '24px 16px 0' }">
                <div class="content">
                    <h3 class="search">条件搜索</h3>
                    <SearchForm></SearchForm>
                    <SearchResult></SearchResult>
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderLayout from '@/components/GloabelHeader/HeaderLayout.vue';
import SiderLayout from '@/components/SiderLayout.vue';
import SearchForm from '@/views/order/components/SearchForm.vue';
import SearchResult from '@/views/order/components/SearchResult.vue';

@Component({
    components: { HeaderLayout, SiderLayout, SearchForm,SearchResult },
})
export default class OrderPage extends Vue {
    
}
</script>

<style lang="scss" scoped>
#order {
    height: 100%;

    .content {
        padding: 16px;
        background: #fff;
        min-height: 360px;
        font-weight: normal;
        .search {
            padding-bottom: 20px;
        }
    }
}
</style>
