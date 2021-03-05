import { Module } from 'vuex';
import { OrderModelState, SearchFormData, SearchPage } from '@/types/order';
import { RootState } from '.';
import OrderFetchServe from '@/service/order-service';

export const orderModule: Module<OrderModelState, RootState> = {
    namespaced: true,
    state: {
        searchParams: {},
        page: 1,
        pageSize: 5,
        orderCount: 0,
        orderResultList: [],
        expressInfo: [],
        callHisInfo: [],
        loading: false,
        
    },
    mutations: {
        //改变搜索状态
        CHANGE_SEARCH_PARAMS(state, { payload }) {
            state.searchParams = payload;
        },
        /**
         * 改变页面信息
         */
        CHANGE_PAGE_INFO(state, { payload }) {
            state.page = payload.page;
            state.orderCount = payload.count;   
        },
        /**
         * 改变订单列表状态
         */
        CHANGE_ORDER_RESULT(state, { payload }) {
            state.orderResultList = payload.list;
        },
        /**
         * 改变加载状态
         */
        CHANGE_LOADING_STATUS(state, { payload }) {
            state.loading = payload.loading;
        },
    },
    actions: {
        /**
         * 提交搜索
         */
        fetchSearch({ commit }, { params }) {
            const _searchParams: SearchFormData = this.state.order.searchParams;
            const _pageSize: number = this.state.order.pageSize;
            const page: number = this.state.order.page;
            const searchParams: SearchFormData = params ?? _searchParams;

            commit({ type: 'CHANGE_LOADING_STATUS', payload: { loading: true } });

            return OrderFetchServe.fetchSearchOrder({
                ...searchParams,
                pageSize: _pageSize,
                page,
            }).then((response) => {
                if (response) {
                    const { data: { count = 0, list = [] } = {} } = response;
                    commit({ type: 'CHANGE_PAGE_INFO', payload: { count, page: page + 1 } });
                    commit({ type: 'CHANGE_ORDER_RESULT', payload: { list } });
                    commit({ type: 'CHANGE_SEARCH_PARAMS', payload: searchParams });
                    commit({ type: 'CHANGE_LOADING_STATUS', payload: { loading: false } });

                    return true;
                } else {
                    return false;
                }
            });
        },
    },
    getters: {},
};
