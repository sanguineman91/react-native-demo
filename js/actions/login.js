
'use strict';

import ActionSheetIOS from 'ActionSheetIOS';
import { Platform } from 'react-native';
import Alert from 'Alert';
import { User } from '../api';
import { createLoadingAction, createSuccessAction, createFailedAction } from './creator';
import { ACTION_TYPE_POST_LOGIN } from './types';


/**
 * 返回一个promise函数，把dispatch传进来，可以处理一些业务逻辑
 * @param {*} scope 
 */
export function login(scope) { 
  return (dispatch) => {   

    dispatch(createLoadingAction(ACTION_TYPE_POST_LOGIN));

    const promise = User.login(scope);

    promise.then(
      (result) => {
        dispatch(createSuccessAction(ACTION_TYPE_POST_LOGIN, result));
      },
      (error) => {
        dispatch(createFailedAction(ACTION_TYPE_POST_LOGIN, error));
      }
    );

    return promise;
  };
}
