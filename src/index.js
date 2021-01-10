import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import {HashRouter, BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

export const initGA = (trackingID) => {           
  ReactGA.initialize(trackingID); 
}

export const pageView = () => {  
  ReactGA.pageview(window.location.pathname + window.location.search); 
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();