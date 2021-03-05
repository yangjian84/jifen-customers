<template>
    <a-layout id="order">
        <SiderLayout></SiderLayout>
        <a-layout>
            <HeaderLayout></HeaderLayout>
            <a-layout-content :style="{ margin: '24px 16px 0' }">
                <div class="content">
                    <h3 class="search">条件搜索</h3>
                    <SearchForm></SearchForm>
                    <SearchResult
                        @expressHide="expressHide"
                        @recodHide="recodHide"
                        @callhisHide="callhisHide"
                    >
                    </SearchResult>
                    <Express
                        :visible="visible_express"
                        @handleOk="expressHide"
                        @handleCancel="expressHide"
                    ></Express>
                    <Recod
                        :visible="visible_record"
                        @handleOk="recodHide"
                        @handleCancel="recodHide"
                    ></Recod>
                    <Callhis :visible="visible_callhis" @handleClose="callhisHide"></Callhis>
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
import Express from '@/views/order/components/ExpressResult.vue';
import Recod from '@/views/order/components/RecordInfo.vue';
import Callhis from '@/views/order/components/CallhisResult.vue';
@Component({
    components: { HeaderLayout, SiderLayout, SearchForm, SearchResult, Express, Recod, Callhis },
})
export default class OrderPage extends Vue {
    private visible_express = false;
    private visible_record = false;
    private visible_callhis = false;

    /**
     * 物流弹窗
     */
    expressHide() {
        this.visible_express = !this.visible_express;
    }
    /**
     * 添加记录弹窗
     */
    recodHide() {
        this.visible_record = !this.visible_record;
    }
    /**
     * 来电记录弹窗
     */
    callhisHide() {
        this.visible_callhis = !this.visible_callhis;
    }
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
