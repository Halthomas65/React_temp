import TodoList from "./components/TodoList.jsx";
import React from 'react'
import ReactDOM from 'react-dom'
// import Textfield from "@atlaskit/textfield";
// import Button from "@atlaskit/button";

function App() {
  getData();
  return
}

export default App;

async function getData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
