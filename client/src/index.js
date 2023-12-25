import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style.css'
import App from './App';

import store from './reducer/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
