import Mock from 'mockjs'
import BaseResponse from '@/model/common/BaseResponse'
import config from '@/config'
const Random = Mock.Random

//待报价
const unoffer = function () {
    let resp = new BaseResponse()
    let array = ['萨达萨达是', '发给对方']
    let newsList = []
    for (let i = 0; i < 20; i++) {
        let newNewsObject = {
            from: Random.city(true),
            to: Random.city(true),
            fromDate: Random.date(),
            toDate: Random.date(),
            goods: array,
            count: Random.natural(0, 30),
            weight: Random.natural(0, 30),
            price: ''
        }
        newsList.push(newNewsObject)
    }
    resp.code = 200
    resp.data = newsList
    resp.fields = '你嘿嘿嘿嘿嘿'
    resp.more = true
    resp.msg = '事实上事实上'
    resp.success = true
    resp.total = 555

    return resp
}
Mock.mock(`${config.SERVICE_URL}offer/unoffer`, unoffer)