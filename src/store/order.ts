import { Module } from 'vuex';
import { OrderModelState, SearchFormData } from '@/types/order';
import { RootState } from '.';
import OrderFetchServe from '@/service/order-service';
import httpRequest, { AxResponseType } from '@/utils/request'

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
    },
    mutations: {},
    actions: {
        *fetchSearch( { commit, rootState },{ payload }) {
            const _searchParams: SearchFormData = yield rootState(
                (state: RootState) => state.order.searchParams,
            );
            const _pageSize: number = yield rootState((state: RootState) => state.order.pageSize);
            const _page: number = yield rootState((state: RootState) => state.order.page);

            const searchParams: SearchFormData = payload.params ?? _searchParams;
            const page = payload?.page ?? _page;

            for (const key in searchParams) {
                if (Object.prototype.hasOwnProperty.call(searchParams, key)) {
                    !searchParams[key] && delete searchParams[key];
                }
            }

            const response: AxResponseType = yield OrderFetchServe.fetchSearchOrder({
                ...searchParams,
                pageSize: _pageSize,
                page,
            });

            if (response) {
                const { data: { count = 0, list = [] } = {} } = response;
                yield commit({ type: 'CHANGE_PAGE_INFO', payload: { count, page: page + 1 } });
                yield commit({ type: 'CHANGE_ORDER_RESULT', payload: { list } });
                yield commit({ type: 'CHANGE_SEARCH_PARAMS', payload: searchParams });
                return true;
            } else {
                return false;
            }
        },
    },
    getters: {},
};
