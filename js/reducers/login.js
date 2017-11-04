
'use strict';

const initialState = {
  isLoggedIn: false,
  id: null,
  name: null,
};

function login(state = initialState, action) {
  if (action.type === 'LOGGED_IN') {
    let {user} = action.data;
    return {
      isLoggedIn: true,
      id: user.id,
      name: user.name,
    };
  }
  if (action.type === 'LOGGED_OUT') {
    return initialState;
  }
  return state;
}

module.exports = login;