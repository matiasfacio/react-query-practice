import React, { useState } from "react";
import styled from "styled-components";
import UpdatePostDisplay from "./UpdatePostDisplay"

function UpdatePost() {
  const [idPost, setIdPost] = useState(null);

  function eraseIdPost() {
    setIdPost(null)
  }

  return (
    <UpdatePostContainer>
      <p>Update Teacher Information</p>
      <label>Enter Id</label>
      <input
        type="number"
        placeholder="id"
        value={idPost || ''}
        onChange={(e) => setIdPost(e.target.value)}
      />
      {idPost && <UpdatePostDisplay id = {idPost} eraseIdPost = {eraseIdPost}/>}
    </UpdatePostContainer>
  );
}

export default UpdatePost;

const UpdatePostContainer = styled.div`
    margin-top: 50px;
    background-color: #232324;
    padding: 20px;
`
