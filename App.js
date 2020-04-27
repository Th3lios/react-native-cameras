/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Root from './src/navigation/index'
import {createStore, combineReducers} from 'redux'
import authReducer from './src/store/reducers/authentication'
import {Provider} from 'react-redux'

const rootReducer = combineReducers({
  users: authReducer
});

const store = createStore(rootReducer);


export default function App() {
  return (
    <Provider store={store}>
      <Root/>
    </Provider>
  );
}

