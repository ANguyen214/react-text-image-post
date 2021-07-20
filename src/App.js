import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const createPosts = (newPosts) => {
    formData.id = posts.length + 1;
    setPosts([newPosts,...posts]);
  }
  // TODO: Add the ability for the <PostCreate /> component to create new posts.
  // TODO: Add the ability for the <PostList /> component to delete an existing post.
  const initialFormState = {
    type: "Text",
    content: "",
  }
  const [formData, setFormData] = useState({...initialFormState});

  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    createPosts();
    setFormData({...initialFormState});
  }

  const handleDelete = (deleteIndex) => {
    event.preventDefault();
    setPosts((currentPosts) => 
      currentPosts.filter((post, index) => {
        index !== deleteIndex;
      }));
  }

  return (
    <div className="App">
      <PostCreate formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <PostList posts={posts} formData={formData} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
