'use strict';

import { combineReducers } from 'redux';

/**
 * 导出的对象的key是作为state数据存储的key，譬如：login 的 reducer， 需要访问到login reducer返回的新state值
 * 用 state.login.xxx
 */
module.exports = combineReducers({
  login: require('./login')
});