/**
 * createdBy: Moke Sun
 * CreatedAt: 2017-10-6
 * 跟后台restful接口交换的http请求, 这里可以合并多个request，或者对响应的数据做处理在return
 */

'use strict';

import ajax from './ajax';

export class User {

  static async login ({username, password}) {
    // try{
    //   await ajax.post('/api/admin/user/login', {username, password});
    // }catch(e){
    //   console.log(e);
    // }
    
    let token = await Promise.resolve('kdkakel323l3233');
    let user = await this.getUserInfo(token);
    //return await Promise.reject({ token, user });

    return await new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve({ token, user });
      }, 5000);
    });
    
  }

  static async logout () {
    return await ajax.post('/user/logout', {});
  }

  static async getUserInfo(token) {
    //return await ajax.get('/user?userId=' + userId);
    return await Promise.resolve({id: 1, name: 'sunkj'});
  }
  
}
