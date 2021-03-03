import { SearchFormData } from '@/types/order';
import httpRequest from '@/utils/request';

class OrderFetchServe {
    /**
     * 搜索订单信息
     */
    public fetchSearchOrder(params?: SearchFormData & { page: number; pageSize: number }) {
        return httpRequest({ url: '/order/searchOrder', data: params });
    }
}
export default new OrderFetchServe();
