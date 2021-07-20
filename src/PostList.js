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
  // const arrayOfPosts = [];
  // posts.forEach((post) => {
  //   //console.log(formData.content);
  //   if(formData.type === "Text"){
  //     arrayOfPosts.push(
  //       <div className="post">
  //         <p>{formData.content}</p>
  //         <button name="delete" onClick={handleDelete}>Delete</button>
  //       </div>
  //     );
  //   } else {
  //     arrayOfPosts.push(
  //       <div className="post">
  //         <img src={`${formData.content}`} />
  //         <button name="delete" onClick={handleDelete}>Delete</button>
  //       </div>
  //     );
  //   }
  // })

  let listOfPosts = posts.map ((post, index) => {
    if(formData.type === "Text"){
        return (
        <div className="post">
          <p>{formData.content}</p>
          <button name="delete" onClick={(post) => handleDelete(post)}>Delete</button>
        </div>
        );
    } else {
        return( 
        <div className="post">
          <img src={formData.content} alt="image"/>
          <button name="delete" onClick={(post) => handleDelete}>Delete</button>
        </div>
        );
    }
  });
 

  return (
    <div className="post-list">{listOfPosts}</div>
  );
}

export default PostList;
