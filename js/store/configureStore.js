
import React from 'react';
import { createStore } from 'redux';
import reducers from '../reducers';

var configureStore = createStore(reducers);

module.exports = configureStore;