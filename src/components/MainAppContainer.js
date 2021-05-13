import React, { useContext, useState } from "react";
import Posts from "./Posts";
import AddPost from "./AddPost";
import SearchPost from "./SearchPost";
import { StyleContext } from "../contexts/StyleContext";
import styled, {keyframes} from "styled-components";
import UpdatePost from './UpdatePost'

function MainAppContainer() {
  const { darkMode } = useContext(StyleContext);
  const [showAllTeachers, setShowAllTeachers] = useState(false)

  return (
    <MainAppContainerStyles>
      <div className="App">
        <Title theme={darkMode}>
          Your Tango Teachers Black & Red List
        </Title>
        <AddPost />
        <UpdatePost/>
        <SearchPost/>
        <Button onClick = {()=> setShowAllTeachers(!showAllTeachers)}>{!showAllTeachers ? "Show all Teachers" : "Hide Teachers"}</Button>
        {showAllTeachers && <Posts />}
      </div>
    </MainAppContainerStyles>
  );
}

export default MainAppContainer;

const Title = styled.h1`
  color: ${props => props.theme ? "red" : "blue"}
`

export const Button = styled.button`
  padding: 10px 20px;
  border: 1px transparent solid;
  outline: none;
  background-color: red;
  color: white;
  font-weight: bolder;
  font-size: 1rem;
  margin: 10px 0;
  &:hover {
    background-color: white;
    color: red;
    border: 1px red solid;
  }
`;

const bringApp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100vw);
  }
  100% {
    opacity: 1;
    transform: translateY(0vw);
  }
`

export const MainAppContainerStyles = styled.div`
  animation: ${bringApp} 1s ease-in-out forwards;
`;
