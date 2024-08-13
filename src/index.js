import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App.jsx';
import Calendar from './components/Calendar.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Calendar /> */}
  </React.StrictMode>
);

