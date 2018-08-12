import React from 'react';
import ReactDOM from 'react-dom';
import Home from './connector/home';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
        <Home />
    </Provider>,
  document.getElementById('root')
);