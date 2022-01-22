
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase';
import { GlobalCss } from './styles/global';

ReactDOM.render(

  <React.StrictMode>
    <GlobalCss>
      <App />
    </GlobalCss>
  </React.StrictMode>,
  document.getElementById('root')
);

