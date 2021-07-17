import React from "react";

/**
 * Diplays a list of either text or image posts.
 *
 */
function PostList({posts, formData, handleDelete}) {
  // TODO: Diplay the list of posts.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each post must have className="post" for the tests to work.
  // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  const arrayOfPosts = [];
  posts.forEach((post) => {
    console.log(post.formData.content);
    if(post.formData.type === "text"){
      arrayOfPosts.push(
        <form name="create">
        <div className="post">
          <p>{formData.content}</p>
          <button name="delete" onClick={handleDelete}>Delete</button>
        </div>
        </form>
      );
      return arrayOfPosts;
    } else {
      arrayOfPosts.push(
        <form name="create">
        <div className="post">
          <img src={`${formData.content}`} />
          <button name="delete" onClick={handleDelete}>Delete</button>
        </div>
        </form>
      );
      return arrayOfPosts;
    }
  })

  return (
    <div className="post-list">{arrayOfPosts}</div>
  );
}

export default PostList;
