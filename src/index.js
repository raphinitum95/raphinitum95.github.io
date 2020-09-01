import React from 'react';
import ReactDOM from 'react-dom';
import Body from './Containers/Body/Body';
import './index.css'
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Body />)
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

