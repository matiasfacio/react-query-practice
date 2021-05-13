import React, { useState } from "react";
import styled from "styled-components";
import GetPost from "./GetPost";
import { Button } from "./MainAppContainer";

function SearchPost() {
  const [searchOne, setSearchOne] = useState(null);
  const [done, setDone] = useState(false)

  return (
    <SearchPostContainer>
      <form onSubmit = {e=> {
        e.preventDefault()
        setDone(true)
      }}>
      <input
        type="text"
        min="1"
        placeholder="search user by id"
        onChange={(e) => e.target.value ? setSearchOne(e.target.value) : setSearchOne(null)} 
      />
      <Button type="submit">Search</Button>
      </form>
      {searchOne !== null && done && <GetPost id={searchOne} />}
    </SearchPostContainer>
  );
}

export default SearchPost;

const SearchPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`
