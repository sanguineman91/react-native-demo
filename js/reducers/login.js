

import { ACTION_TYPE_POST_LOGIN } from '../actions/types';
import { ACTION_LOADINGD, ACTION_SUCCESS, ACTION_FAILED } from '../constants';

'use strict';

const initialState = {
  isLoggedIn: false,
  data: null,
  error: null,
  status: null
};

function login(state = initialState, action) {
  if (action.type === ACTION_TYPE_POST_LOGIN) {
    let { type, data, error, status } = action;
    // 数据的简单处理
    return { 
      isLoggedIn: status === ACTION_SUCCESS, 
      data, 
      error,
      status: status 
    };
  }
  if (action.type === 'LOGGED_OUT') {
    return initialState;
  }
  return state;
}

export default login;
