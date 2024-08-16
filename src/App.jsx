
import React from 'react'
import ReactDOM from 'react-dom'
// import Textfield from "@atlaskit/textfield";
// import Button from "@atlaskit/button";

function App() {
  // getData();
  return<></>
}

export default App;

// async function getData() {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }
//     const posts = await response.json();

//     // Get the container where posts will be displayed
//     const container = document.getElementById('posts-container');

//     // Clear previous content (if any)
//     container.innerHTML = '';

//     // Iterate over the posts and create HTML elements for each
//     posts.forEach(post => {
//       // Create a div for each post
//       const postDiv = document.createElement('div');
//       postDiv.className = 'post';

//       // Create a title element
//       const title = document.createElement('div');
//       title.className = 'post-title';
//       title.textContent = post.title;

//       // Create a body element
//       const body = document.createElement('div');
//       body.className = 'post-body';
//       body.textContent = post.body;

//       // Append title and body to the post div
//       postDiv.appendChild(title);
//       postDiv.appendChild(body);

//       // Append the post div to the container
//       container.appendChild(postDiv);
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
//   return <div>
//     <body>
//       <div id="posts-container"></div>
//       <script src="app.js"></script>
//     </body>

//   </div>;
// }
