import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
function PostCreate({ createPosts }) {
  const [type, setType] = useState("Text");

  const handleType = (event) => setType(event.target.value);

  const initialFormState = {
    type: "Text",
    content: "",
  }
  const [formData, setFormData] = useState({...initialFormState});

  const handleChange = ({target}) => {
    console.log(target.name);
    console.log(target.value);
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    createPosts({type: type, content: formData.content});
    setFormData({...initialFormState});
  } 

  // TODO: When the form is submitted, a new post should be created, and the form contents cleared.
  // For the tests to pass, the form below must have:
  // - a `name="create"` attribute
  // - one child `<button>` with a `type="submit"` attribute
  // - one child `<select>` with a `name="type"` attribute
  // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`

  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select id="type" name="type" required={true} onChange={handleType} value={type}>
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {type === "Text" ? (
            <textarea 
              id="content" 
              name="content" 
              required={true} 
              rows={3} 
              onChange={handleChange}
              value={formData.content}
              />
          ) : (
            <input 
              id="content" 
              name="content" 
              type="url" 
              required={true}
              onChange={handleChange}
              value={formData.content} 
              />
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
