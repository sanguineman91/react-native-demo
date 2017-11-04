
'use strict';

import ActionSheetIOS from 'ActionSheetIOS';
import { Platform } from 'react-native';
import Alert from 'Alert';


/**
 * 登录的api
 * @param {*} loginName 
 * @param {*} password 
 */
async function loginAPI(scope) { 
  return await new Promise((resolve, reject) => {
    resolve('saf234');
  });
}

/**
 * 获取用户信息
 * @param {*} path 
 * @param {*} args 
 */
async function queryUserInfoAPI(token) {
  return await new Promise((resolve, reject) => {
    resolve({id: 1, name: 'sunkj'});
  });
}
 
async function login(scope) { 
  const token = await loginAPI(scope);
  const user = await queryUserInfoAPI(token);
  user.name = scope.username;
  const action = {
    type: 'LOGGED_IN',
    data: {
      id: user.id,
      token: token,
      user: user
    },
  };

  return await Promise.resolve(action);

  // return (dispatch) => {    
  //   dispatch(action);
  //   return Promise.resolve(user);
  // };
}

/**
 * 推出登录
 */
function logout(): ThunkAction {
  return (dispatch) => {
    // todo: 调用logout的api

    //Make sure reducers clear their state
    return dispatch({
      type: 'LOGGED_OUT',
    });
  };
}

/**
 * 退出确认
 */
function logoutWithPrompt(): ThunkAction {
  return (dispatch, getState) => {
    let name = getState().user.name || '匿名';

    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          title: `您好, ${name}，确定要退出吗？`,
          options: ['确认退出', '取消'],
          destructiveButtonIndex: 0,
          cancelButtonIndex: 1,
        },
        (buttonIndex) => {
          if (buttonIndex === 0) {
            dispatch(logout());
          }
        }
      );
    } else {
      Alert.alert(
        `您好, ${name}`,
        '确定要退出吗？',
        [
          { text: '取消' },
          { text: '确认退出', onPress: () => dispatch(logout()) },
        ]
      );
    }
  };
}

module.exports = { 
  login, 
  logout, 
  logoutWithPrompt 
};