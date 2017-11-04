/**
 * React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './js/store/configureStore';
import Route from './js/navigators/index';

export default class App extends Component<{}> {
  state: {
    isLoading: false,
    store: null,
  }

  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore,
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <Route />
      </Provider>
    );
  }
}
