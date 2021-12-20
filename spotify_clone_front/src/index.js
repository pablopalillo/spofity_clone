import React from 'react';
import ReactDOM from 'react-dom';

import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Login from './components/forms/Login';
import './index.css';
import reportWebVitals from './reportWebVitals';

const { Header, Content } = Layout;

ReactDOM.render(
  <React.StrictMode>

    <Login />
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
