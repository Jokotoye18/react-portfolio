import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { Offline, Online } from "react-detect-offline";



import App from './App';

ReactDOM.render(
    <React.StrictMode>
      <Online>
      <Router>
        <App />
      </Router>
      </Online>
      <Offline >
        <h1 className='text-white'>Connection disconected</h1>
      </Offline>
    </React.StrictMode>,
  document.getElementById('root')
);
