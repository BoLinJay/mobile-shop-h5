import www from "../utils/request_ajax.js";
/**
 * 登录
 * @param {*} <Object></Object>
 * @returns
 */
export const login = (params) => {
  return www("/user/login", "post", params);
};
/**
 * 获取商品列表
 * @returns Promise
 */
export const getGoodList = (parpms) => {
  return www("/goods/list", "get", parpms);
};
/**
 *注册接口
 * @param {*} params
 * @returns
 */
export const register = (params) => {
  return www("/user/register", "post", params);
};
/**
 * 收货地址
 * @returns
 */
export const findAddress = () => {
  return www("/address/list", "get");
};
