import React, { useState } from "react";
import styled from "styled-components";
import usePostQuery from "../hooks/usePostQuery";
import { Button } from "./MainAppContainer";
import usePostMutation from "../hooks/usePostMutation";

function UpdatePostDisplay({ id, eraseIdPost }) {
  const [newData, setNewData] = useState(null);
  const postQuery = usePostQuery(id);
  const mutation = usePostMutation();
  const { data } = postQuery;
 

  function handleForm(e) {
    const { name, value } = e.target;
    setNewData({
      ...newData,
      id: data.id,
      [name]: value,
    });
  }

  if (postQuery.isLoading) return <p>Loading...</p>;

  if (postQuery.error) return <p>Error loading data...</p>;

  return (
    <div>
      <label>ID: </label>
      <label>{data.id}</label>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate(newData);
          setNewData("");
          eraseIdPost();
        }}
      >
        <div>
          <label>Name:</label>
          <input
            id="name"
            name="name"
            placeholder={data.name}
            value={newData?.name || ""}
            onChange={(e) => handleForm(e)}
            autoComplete="name"
          />
          <label>Last Name:</label>
          <input
            id="lastname"
            name="lastname"
            placeholder={data.lastname}
            value={newData?.lastname || ""}
            onChange={(e) => handleForm(e)}
            autoComplete="family-name"
          />
          <label>User Name:</label>
          <input
            id="username"
            name="username"
            placeholder={data.username}
            value={newData?.username || ""}
            onChange={(e) => handleForm(e)}
            autoComplete="username"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            id="email"
            name="email"
            placeholder={data.email}
            value={newData?.email || ""}
            onChange={(e) => handleForm(e)}
            autoComplete="email"
          />
          <label>Password:</label>
          <input
            id="password"
            name="password"
            placeholder={data.password}
            value={newData?.password || ""}
            onChange={(e) => handleForm(e)}
            autoComplete="current-password"
          />
          <label>Telephone</label>
          <input
            id="telephone"
            name="telephone"
            placeholder={data.telephone}
            value={newData?.telephone || ""}
            onChange={(e) => handleForm(e)}
            autoComplete="tel"
          />
        </div>
        <Button>Submit / Close</Button>
      </Form>
    </div>
  );
}

export default UpdatePostDisplay;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  div {
    display: flex;
    flex-direction: column;
  }
`;
