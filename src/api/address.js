import axios from 'axios';

const ManageService = 'http://transport.n1b.com/';

//获取品类
export function getTypes() {
    return axios({
        method: 'post',
        url: ManageService + 'sinofertTransport/marketInfo/selectTypes',
    });
}

//获取区域
export function getRegion() {
    return axios({
        method: 'post',
        url: ManageService + 'sinofertTransport/marketInfo/selectArea',
    });
}

//获取大区每日成交价
export function getBigAreaEverydayPrice(queryParam) {
    return axios({
        method: 'post',
        url: ManageService + 'sinofertTransport/marketInfo/select1',
        params: queryParam
    });
}

//获取区域每日成交价
export function getSunMarketEverydayPrice(queryParam) {
    return axios({
        method: 'post',
        url: ManageService + 'sinofertTransport/marketInfo/select2',
        params: queryParam
    });
}

//获取大区总成交量
export function getBigAreaTotalVolume(queryParam) {
    return axios({
        method: 'post',
        url: ManageService + 'sinofertTransport/marketInfo/select3',
        params: queryParam
    });
}
 
//获取区域当天成交价格
export function getSunMarketDayPrice(queryParam) {
    return axios({
        method: 'post',
        url: ManageService + 'sinofertTransport/marketInfo/select4',
        params: queryParam
    });
}

//获得工厂每天成交价
export function getFactoryEverydayPrice(queryParam) {
    return axios({
        method: 'post',
        url: ManageService + 'sinofertTransport/marketInfo/select5',
        params: queryParam
    });
}
//获得工厂每天成交量
export function getFactoryEverydayNum(queryParam) {
    return axios({
        method: 'post',
        url: ManageService + 'sinofertTransport/marketInfo/select6',
        params: queryParam
    });
}