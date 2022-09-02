import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import store from './Redux/store';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Auth0Provider
    domain="shariq-codes.us.auth0.com"
    clientId="WZcPbtZH6V3gQ4AYSJDzx8aoZTIrVhgV"
    redirectUri={window.location.origin}
  >
    <Provider store = {store}><App /></Provider>
    
  </Auth0Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
