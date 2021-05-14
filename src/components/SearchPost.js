import React, { useState } from "react";
import styled from "styled-components";
import GetPost from "./GetPost";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
// import { Button } from "./MainAppContainer";

function SearchPost() {
  const [searchOne, setSearchOne] = useState(null);
  const [done, setDone] = useState(false);

  return (
    <SearchPostContainer>
      <Input
        placeholder="search teacher by id"
        onChange={(e) => {
          e.target.value ? setSearchOne(e.target.value) : setSearchOne(null);
        }}
        onPressEnter={(e) => {
          e.target.value ? setSearchOne(e.target.value) : setSearchOne(null);
          setDone(true);
        }}
      />
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
  width: 100%;
  input {
    max-width: 300px;
  }
`;
