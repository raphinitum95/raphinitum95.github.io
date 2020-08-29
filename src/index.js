import React from 'react';
import ReactDOM from 'react-dom';
import Body from './Containers/Body/Body';
import './index.css'
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <Body />
  </React.StrictMode>,
  document.getElementById('root')
);

