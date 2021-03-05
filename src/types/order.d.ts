export interface OrderModelState {
    searchParams: SearchFormData;
    page: number;
    pageSize: number;
    orderCount: number;
    orderResultList: Array<OrderResult>;
    expressInfo: Array<ExpressInfo>;
    callHisInfo: Array<CallHisInfo>;
    loading: boolean;
}
export interface SearchPage {
    current: number;
    pageSize: number;
    total: number;
}
export interface SearchFormData {
    orderNo?: string;
    expressMobile?: string;
    orderStatus?: number;
    orderClass?: number;
}

export interface OrderResult {
    orderNO: string;
    orderClass: number;
    orderAmount: number;
    orderStatus: number;
    orderCreateTime: number;
    orderId: number;
}

export interface ExpressInfo {
    context: string;
    express: string;
    time: string;
    express_no: string;
}

export interface CallHisInfo {
    rid: number;
    name: string;
    mobile: string;
    question: string;
    effect: string;
    orderId: number;
    customerUser: string;
    createTime: string;
    status: 1 | 0;
}
