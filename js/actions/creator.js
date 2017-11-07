
import { ACTION_LOADINGD, ACTION_SUCCESS, ACTION_FAILED } from '../constants';


export function createLoadingAction(type) {
  return {
    type: type,
    data: null,
    status: ACTION_LOADINGD
  };
}

export function createSuccessAction(type, data) {
  return {
    type: type,
    data: data,
    status: ACTION_SUCCESS
  };
}

export function createFailedAction(type, error) {
  return {
    type: type,
    error: error,
    status: ACTION_FAILED
  };
}
