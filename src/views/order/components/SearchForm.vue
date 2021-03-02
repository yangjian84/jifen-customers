<template>
    <a-form
        layout="horizontal"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 10 }"
        labelAlign="right"
    >
        <a-row :gutter="20">
            <a-col :span="12">
                <a-form-item label="订单编号" name="orderNo">
                    <a-input></a-input>
                </a-form-item>
            </a-col>
            <a-col :span="12">
                <a-form-item label="收货手机" name="expressMobile">
                    <a-input></a-input>
                </a-form-item>
            </a-col>
        </a-row>
        <a-row :gutter="20">
            <a-col :span="12">
                <a-form-item label="订单状态" name="orderStatus">
                    <a-select style="width: 100% " @change="handleChange">
                        <a-select-option v-for="item in orderStatus" :key="item.value">
                            {{ item.key }}
                        </a-select-option>
                    </a-select>
                </a-form-item>
            </a-col>
            <a-col :span="12">
                <a-form-item label="订单分类" name="orderClass">
                    <a-select style="width: 100% " @change="handleChange">
                        <a-select-option v-for="item in orderClass" :key="item.value">
                            {{ item.name }}
                        </a-select-option>
                    </a-select>
                </a-form-item>
            </a-col>
        </a-row>
        <a-row>
            <a-col :span="24" class="buttonname">
                <a-form-item>
                    <a-button type="primary" htmlType="submit">
                        搜索
                    </a-button>
                </a-form-item>

                <a-form-item>
                    <a-button>
                        重置
                    </a-button>
                </a-form-item>
            </a-col>
        </a-row>
    </a-form>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({
    components: {},
})
export default class SearchPage extends Vue {
    private orderClass = [
        {
            value: 5,
            name: '话费充值',
        },
        {
            value: 2,
            name: '油卡充值',
        },
        {
            value: 3,
            name: '粮油米面',
        },
        {
            value: 1,
            name: '日用百货',
        },
    ];
    private orderStatus = [
        {
            value: 100,
            key: '待支付',
        },
        {
            value: 101,
            key: '待确认',
        },
        {
            value: 102,
            key: '待发货',
        },
        {
            value: 103,
            key: '待收货',
        },
        {
            value: 105,
            key: '待评价',
        },
        {
            value: 106,
            key: '发售后',
        },
        {
            value: 107,
            key: '售后中',
        },
        {
            value: 108,
            key: '售后完',
        },
        {
            value: 112,
            key: '已拒绝',
        },
        {
            value: 113,
            key: '请上传',
        },
        {
            value: 104,
            key: '已取消',
        },
        {
            value: 111,
            key: '已完成',
        },
    ];
    handleChange(value: string) {
        console.log(`selected ${value}`);
    }
}
</script>
<style lang="less" scoped>
.buttonname {
    display: flex;
    justify-content: flex-end;
    button {
        margin-left: 20px;
    }
}
</style>
