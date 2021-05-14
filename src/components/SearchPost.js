import React, { useState } from "react";
import styled from "styled-components";
import GetPost from "./GetPost";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function SearchPost() {
  const [searchOne, setSearchOne] = useState(null);
  const [done, setDone] = useState(false);

  return (
    <div>
      <h2>Search Teacher by id</h2>
      <SearchPostContainer>
        <Input
          placeholder="teacher id"
          onChange={(e) => {
            e.target.value ? setSearchOne(e.target.value) : setSearchOne(null);
          }}
          onPressEnter={(e) => {
            e.target.value ? setSearchOne(e.target.value) : setSearchOne(null);
            setDone(true);
          }}
        />
        <SearchOutlined
          style={{ fontSize: "32px", color: "white", marginLeft: "20px" }}
        />
        {searchOne !== null && done && <GetPost id={searchOne} />}
      </SearchPostContainer>
    </div>
  );
}

export default SearchPost;

const SearchPostContainer = styled.div`
  display: flex;
  flex-direction: row;
  input {
    max-width: 300px;
  }
`;
