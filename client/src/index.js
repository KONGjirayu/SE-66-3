// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'antd/dist/reset.css'
import axios from 'axios';

// ตั้งค่า Axios base URL เพื่อให้สามารถเรียกใช้ API ของเซิร์ฟเวอร์ได้
axios.defaults.baseURL = 'http://localhost:3001'; // เปลี่ยนเป็น URL ของเซิร์ฟเวอร์ของคุณ

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
