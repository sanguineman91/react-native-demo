
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

//var configureStore = createStore(reducers);
var configureStore = applyMiddleware(thunk)(createStore)(reducers);

module.exports = configureStore;