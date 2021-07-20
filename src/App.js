import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const createPosts = (newPosts) => {
    setPosts([newPosts,...posts]);
  }
  // TODO: Add the ability for the <PostCreate /> component to create new posts.
  // TODO: Add the ability for the <PostList /> component to delete an existing post.

  const handleDelete = (deleteIndex) => {
    setPosts((currentPosts) => 
      currentPosts.filter((post, index) => {
        return index !== deleteIndex;
      }));
  }

  return (
    <div className="App">
      <PostCreate 
        createPosts={createPosts}
        />
      <PostList posts={posts} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
