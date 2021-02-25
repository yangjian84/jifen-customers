/* eslint-disable @typescript-eslint/no-explicit-any */
import router from '@/router';
import axios, { AxiosResponse, AxiosTransformer } from 'axios';

export interface codeMessage {
    200: '服务器成功返回请求的数据';
    201: '新建或修改数据成功';
    202: '一个请求已经进入后台排队（异步任务）';
    204: '删除数据成功';
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作';
    401: '用户没有权限（令牌、用户名、密码错误）';
    403: '用户未得到授权，访问是被禁止的';
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作';
    406: '请求的格式不可得';
    410: '请求的资源被永久删除，且不会再得到的';
    422: '当创建一个对象时，发生一个验证错误';
    500: '服务器发生错误，请检查服务器';
    502: '网关错误';
    503: '服务不可用，服务器暂时过载或维护';
    504: '网关超时';
}

export const baseURL = 'http://192.168.0.36:3001/apis/';

export interface AxResponseType {
    code: keyof codeMessage;
    data: {
        message: string;
        type: 'success' | 'error';
        page?: number;
        page_size?: number;
        count?: number;
        total_page?: number;
        list?: Array<any>;
        entity?: {
            [name: string]: any;
        };
        token?: string;
    };
}

export default function httpRequest(option: {
    url: string;
    method?: 'GET';
    responseType?: 'blob' | 'arraybuffer' | 'document' | 'json' | 'text' | 'stream';
    transformRequest?: AxiosTransformer;
    data?: { [name: string]: any };
}) {
    const { url, method, data, responseType, transformRequest } = option;
    return new Promise(
        (resolve: (value: AxResponseType) => void, reject: (value: AxResponseType) => void) => {
            const TOKEN = localStorage.getItem('TOKEN'); // token
            axios({
                url,
                data,
                method: method ?? 'POST',
                headers: {
                    Authorization: TOKEN ? 'Bearer ' + TOKEN : null,
                },
                transformRequest,
                baseURL,
                responseType,
            })
                .then((result: AxiosResponse<AxResponseType>) => {
                    const { code } = result.data;
                    switch (code) {
                        case 200:
                            resolve(result.data);
                            break;

                        case 401:
                            reject(result.data);
                            router.push('/login');
                            console.error('身份验证失败');
                            break;

                        case 403:
                            reject(result.data);
                            router.push('/login');
                            console.error('未授权的请求');
                            break;

                        default:
                            reject(result.data);
                            console.error('异常的响应');
                            break;
                    }
                })
                .catch((error) => {
                    if (error.response) {
                        if (error.response.status === 401) {
                            router.push('/login');
                            reject({
                                code: error.response.code,
                                data: { message: '身份验证失败，请重新登录', type: 'error' },
                            });
                        } else {
                            reject({
                                code: error.response.code,
                                data: { message: '网络错误', type: 'error' },
                            });
                        }
                    } else {
                        reject({ code: 400, data: { message: '网络错误', type: 'error' } });
                    }
                });
        },
    );
}
