import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from "./routes";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import index from "./store/index.ts";
// add styles
import './assets/style/bootstrap-reboot.min.css';
import './assets/style/main.sass';
import './assets/style/media.sass';
import './assets/style/iconsFont.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={index}>
          <BrowserRouter>
              <Routes />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);