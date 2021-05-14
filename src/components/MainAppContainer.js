import React, { useContext, useState } from "react";
import Posts from "./Posts";
import AddPost from "./AddPost";
import SearchPost from "./SearchPost";
import { StyleContext } from "../contexts/StyleContext";
import styled, { keyframes } from "styled-components";
import UpdatePost from "./UpdatePost";
import { Button } from "antd";
import SelectTeacherLastName from "./SelectTeacherLastName";

function MainAppContainer() {
  const { darkMode } = useContext(StyleContext);
  const [showAllTeachers, setShowAllTeachers] = useState(false);

  function handleShowAllTeachers() {
    setShowAllTeachers((state) => !state);
    document.body.scrollBy(0, 300) || document.documentElement.scrollBy(0, 300);
    return;
  }

  return (
    <MainAppContainerStyles>
      <div className="App">
        <Title theme={darkMode}>
          <h1>Your Tango Teachers Black & Red List</h1>
        </Title>
        <Hr />
        <SearchMethodsContainer>
          <SearchPost />
          <SelectTeacherLastName />
        </SearchMethodsContainer>
        <Button type="primary" danger onClick={handleShowAllTeachers}>
          {!showAllTeachers ? "Show all Teachers" : "Hide Teachers"}
        </Button>
        {showAllTeachers && <Posts />}
        <AddPost />
        <UpdatePost />
      </div>
    </MainAppContainerStyles>
  );
}

export default MainAppContainer;

const Hr = styled.hr`
  color: #ff4d4f;
  background-color: #ff4d4f;
  width: 100%;
  height: 2px;
  border: none;
`;


const Title = styled.div`
  display: inline;
  h1 {
    color: ${(props) => (props.theme ? "#ff4d4f;" : "blue")};
    font-weight: bolder;
    text-transform: uppercase;
  }
`;

const bringApp = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100vw);
  }
  100% {
    opacity: 1;
    transform: translateX(0vw);
  }
`;

export const MainAppContainerStyles = styled.div`
  animation: ${bringApp} 1s ease-in-out forwards;
`;

const SearchMethodsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 50px;
  width: 100%;
  height: 200px;
`