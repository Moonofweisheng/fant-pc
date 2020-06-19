import ApiClient from '@/http/ApiClient'

export default class AccountApi {
  /**
   * 禁用账户
   * 禁用账户
   *
   * @param tenant 租户id
   * @param uuid 账户id
   */
  static disable(): Promise<any> {
    return ApiClient.server().post(`/offer/unoffer`, {}, {
      params: {}
    }).then((res) => {
      return res.data
    })
  }

  /**
   * 获取账户
   * 获取账户
   *
   * @param tenant 租户id
   * @param owner 拥有者id
   * @param type 账户类型,
   */
  static get(tenant: string, owner: string, type: string): Promise<any> {
    return ApiClient.server().get(`aas/v1/${tenant}/account/get`, {
      params: {
        owner: owner,
        type: type
      }
    }).then((res) => {
      return res.data
    })
  }

}
