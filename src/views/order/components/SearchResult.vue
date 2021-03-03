<template>
    <a-table :columns="dataList" :data-source="data" >
        <span slot="orderClass" slot-scope="orderClass">
            <a-tag
                v-for="tag in orderClass"
                :key="tag"
                :color="tag === '日用百货' ? '#2db799' : '#f50'"
                >{{ tag }}</a-tag
            >
        </span>
        <span slot="orderStatus" slot-scope="orderStatus">
            <a-tag
                v-for="tag in orderStatus"
                :key="tag"
                :color="tag === '代发货' ? 'geekblue' : 'green'"
            >
                {{ tag }}
            </a-tag>
        </span>
        <span slot="lookMore">
            <a-space>
                <div>
                    <a-button type="link" @click="expressHide">查看物流</a-button>
                    <Express
                        :visible="visible_express"
                        @handleOk="expressHide"
                        @handleCancel="expressHide"
                    ></Express>
                </div>
                <div>
                    <a-button type="primary" @click="recodHide">添加记录</a-button>
                    <Recod
                        :visible="visible_record"
                        @handleOk="recodHide"
                        @handleCancel="recodHide"
                    ></Recod>
                </div>
                <div>
                    <a-button type="dashed" @click="callhisHide">来电记录</a-button>
                    <Callhis :visible="visible_callhis" @handleClose="callhisHide"></Callhis>
                </div>
            </a-space>
        </span>
    </a-table>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Express from '@/views/order/components/ExpressResult.vue';
import Recod from '@/views/order/components/RecordInfo.vue';
import Callhis from '@/views/order/components/CallhisResult.vue';
@Component({
    components: { Express, Recod, Callhis },
})
export default class SearchResult extends Vue {
    private visible_express = false;
    private visible_record = false;
    private visible_callhis = false;

    private dataList = [
        {
            title: '订单号',
            dataIndex: 'orderNo',
            key: 'name',
        },
        {
            title: '订单类型',
            dataIndex: 'orderClass',
            key: 'orderClass',
            scopedSlots: { customRender: 'orderClass' },
        },
        {
            title: '订单金额',
            dataIndex: 'orderAmount',
            key: 'orderAmount',
        },
        {
            title: '状态',
            key: 'orderStatus',
            dataIndex: 'orderStatus',
            scopedSlots: { customRender: 'orderStatus' },
        },
        {
            title: '下单时间',
            key: 'orderCreateTime',
            dataIndex: 'orderCreateTime',
        },
        {
            title: '操作',
            key: 'lookMore',
            dataIndex: 'lookMore',
            scopedSlots: { customRender: 'lookMore' },
        },
    ];

    private data = [
        {
            key: '1',
            orderNo: '2021030115574243628',
            orderClass: ['日用百货'],
            orderAmount: '74800 积分',
            orderStatus: ['代发货'],
            orderCreateTime: '2021-03-01 / 15:03',
        },
        {
            key: '2',
            orderNo: '2021030115574243628',
            orderClass: ['日用百货'],
            orderAmount: '74800 积分',
            orderStatus: ['代发货'],
            orderCreateTime: '2021-03-01 / 15:03',
        },
        {
            key: '3',
            orderNo: '2021030115574243628',
            orderClass: ['日用百货'],
            orderAmount: '74800 积分',
            orderStatus: ['代发货'],
            orderCreateTime: '2021-03-01 / 15:03',
        },
    ];
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
<style lang="less" scoped>
.ant-table td {
    white-space: nowrap;
}
</style>
