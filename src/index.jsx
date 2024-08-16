import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App.jsx';
// import Calendar from './components/Calendar.jsx';
import TodoList from './components/TodoList.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Calendar /> */}
    {/* <h1>Todo List</h1>/ */}
    <TodoList />
  </React.StrictMode>
);

