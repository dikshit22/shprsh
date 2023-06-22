import {positions,transitions,Provider as AlertProvider}from "react-alert";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import AlertTemplate from 'react-alert-template-basic';
const options={
  timeout:7000,
  position:positions.BOTTOM_CENTER,
  transition:transitions.SCALE,
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate}{...options}>
         <App />
    </AlertProvider>
    
  </Provider>,
);

