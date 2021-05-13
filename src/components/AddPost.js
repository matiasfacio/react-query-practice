import React, { useState } from "react";
import styled from "styled-components";
import usePost from "../hooks/usePost";
import { Button } from "./MainAppContainer";


const todayis = new Date()
const month = todayis.getMonth();
const year = todayis.getFullYear();
const day = todayis.getDate()
const today = `${year}-${month}-${day}`;


const initialState = {
  name: "",
  lastname:"",
  username:"",
  password:"",
  telephone:"",
  email:"",
  joining_date: today
}
function AddPost() {

  const [newpost, setNewpost] = useState(initialState);
  const postQuery = usePost();

  function handleForm(e) {
    setNewpost({
      ...newpost,
      [e.target.name]: e.target.value
    })
  }

  return (
    <AddPostContainer>
    
      <label>Add Teacher</label>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postQuery.mutate(JSON.stringify(newpost))
          setNewpost(initialState);
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => handleForm(e)}
          value={newpost.name}
          required
          autoComplete = "name"
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          onChange={(e) => handleForm(e)}
          value={newpost.lastname}
          required
          autoComplete = "family-name"
        />
        <input
          type="text"
          name="username"
          placeholder="user name"
          onChange={(e) => handleForm(e)}
          value={newpost.username}
          required
          autoComplete = "username"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => handleForm(e)}
          value={newpost.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => handleForm(e)}
          value={newpost.password}
          autoComplete = "new-password"
          required
        />
        <input
          type="text"
          name="telephone"
          placeholder="telephone"
          onChange={(e) => handleForm(e)}
          value={newpost.telephone}
          autoComplete = "tel"
        />
      
        <Button type="submit">Submit</Button>
      </form>
    </AddPostContainer>
  );
}

export default AddPost;

const AddPostContainer = styled.div`
  background-color: #232324;
  padding: 20px;
  margin-top: 50px;
`
