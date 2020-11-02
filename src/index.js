import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';
import 'react-redux';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';
import reducer from './reducer/index.js';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);