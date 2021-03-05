<template>
    <a-table
        :columns="columns"
        :data-source="resultList"
        :pagination="{ total: orderCount }"
        :loading="loading"
        :row-key="(item) => item.orderNo"
        @change="handleTableChange"
    >
        <span slot="orderAmount" slot-scope="orderAmount">{{ orderAmount }}积分</span>
        <span slot="orderClass" slot-scope="orderClass">
            <a-tag v-class="orderClass">{{ orderClass }}</a-tag>
        </span>
        <span slot="orderStatus" slot-scope="orderStatus">
            <a-tag v-color="orderStatus">{{ orderStatus }}</a-tag>
        </span>
        <span slot="orderCreateTime" slot-scope="orderCreateTime">{{ orderCreateTime }}</span>
        <span slot="lookMore">
            <a-space>
                <div>
                    <a-button type="link" @click="$emit('expressHide')">查看物流</a-button>
                </div>
                <div>
                    <a-button type="primary" @click="$emit('recodHide')">添加记录</a-button>
                </div>
                <div>
                    <a-button type="dashed" @click="$emit('callhisHide')">来电记录</a-button>
                </div>
            </a-space>
        </span>
    </a-table>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { OrderResult, SearchPage } from '@/types/order';
import { OrderStatus } from '@/constants/order';

@Component({
    components: {},
    directives: {
        color: {
            // 指令的定义
            inserted: function(el, binding, value) {
                switch (binding.value) {
                    case 100:
                        {
                            el.style.background = '#E6FFFB';
                            el.style.border = '1px solid #87E8DE';
                            el.style.color = '#13C2C2';
                            el.textContent = '待支付';
                        }
                        break;
                    case 101:
                        {
                        }
                        break;
                    case 102:
                        {
                            el.style.background = '#F6FFED';
                            el.style.border = '1px solid #BDED97';
                            el.style.color = '#52C41A';
                            el.textContent = '待发货';
                        }
                        break;
                    case 103:
                        {
                            el.style.background = '#E6F7FF';
                            el.style.border = '1px solid #91D5FF';
                            el.style.color = '#1890FF';
                            el.textContent = '待收货';
                        }
                        break;
                    case 104:
                        {
                            el.style.background = '#E6F7FF';
                            el.style.border = '1px solid #91D5FF';
                            el.style.color = '#1890FF';
                            el.textContent = '已取消';
                        }
                        break;
                    case 105:
                        {
                            el.style.background = '#E6F7FF';
                            el.style.border = '1px solid #91D5FF';
                            el.style.color = '#1890FF';
                            el.textContent = '待评价';
                        }
                        break;
                    case 106:
                        {
                            el.style.background = '#E6F7FF';
                            el.style.border = '1px solid #91D5FF';
                            el.style.color = '#1890FF';
                            el.textContent = '发售后';
                        }
                        break;
                    case 107:
                        {
                            el.style.background = '#E6F7FF';
                            el.style.border = '1px solid #91D5FF';
                            el.style.color = '#1890FF';
                            el.textContent = '售后中';
                        }
                        break;
                    case 108:
                        {
                            el.style.background = '#E6F7FF';
                            el.style.border = '1px solid #91D5FF';
                            el.style.color = '#1890FF';
                            el.textContent = '售后完';
                        }
                        break;
                    case 111:
                        {
                            el.style.background = '#E6F7FF';
                            el.style.border = '1px solid #91D5FF';
                            el.style.color = '#1890FF';
                            el.textContent = '已完成';
                        }
                        break;
                    case 112:
                        {
                            el.style.background = '#E6F7FF';
                            el.style.border = '1px solid #91D5FF';
                            el.style.color = '#1890FF';
                            el.textContent = '已拒绝';
                        }
                        break;
                    case 113:
                        {
                            el.style.background = '#E6F7FF';
                            el.style.border = '1px solid #91D5FF';
                            el.style.color = '#1890FF';
                            el.textContent = '请上传';
                        }
                        break;
                }
            },
        },
        class: {
            inserted: function(el, binding, value) {
                switch (binding.value) {
                    case 1:
                        {
                            el.textContent = '日用百货';
                        }
                        break;
                    case 2:
                        {
                            el.textContent = '油卡充值';
                        }
                        break;
                    case 3:
                        {
                            el.textContent = '粮油米面';
                        }
                        break;
                    case 5:
                        {
                            el.textContent = '话费充值';
                        }
                        break;
                }
            },
        },
    },
})
export default class SearchResult extends Vue {
    /**
     * 获取列表信息
     */
    private get resultList(): Array<OrderResult> {
        return this.$store.state.order.orderResultList;
    }
    /**
     * 获取总页数
     */
    private get orderCount(): number {
        return this.$store.state.order.orderCount;
    }
    /**
     * 获取加载状态
     */
    private get loading(): boolean {
        return this.$store.state.order.loading;
    }

    private columns = [
        {
            title: '订单号',
            dataIndex: 'orderNo',
            key: 'orderNo',
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
            scopedSlots: { customRender: 'orderAmount' },
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
            scopedSlots: { customRender: 'orderCreateTime' },
        },
        {
            title: '操作',
            key: 'lookMore',
            dataIndex: 'lookMore',
            scopedSlots: { customRender: 'lookMore' },
        },
    ];
    /**
     *页面跳转
     */
    handleTableChange(option: SearchPage) {
        this.$store.commit({
            type: 'order/CHANGE_PAGE_INFO',
            payload: { count: option.total, page: option.current },
        });
        this.$store.dispatch({
            type: 'order/fetchSearch',
        });
    }
}
</script>
<style lang="less" scoped>
.ant-table td {
    white-space: nowrap;
}
</style>
