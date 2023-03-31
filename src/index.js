import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from "./routes";
import {BrowserRouter} from "react-router-dom";
// Bootstrap reboot
import './assets/style/bootstrap-reboot.min.css';
// Add main styles
import './assets/style/main.sass';
// Add media query
import './assets/style/media.sass';
// Add icons font
import './assets/style/iconsFont.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
  </React.StrictMode>
);