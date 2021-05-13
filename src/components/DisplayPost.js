import React, { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useQuery } from "react-query";
import { onePost } from "../api/api";
import { StyleContext } from "../contexts/StyleContext";
import { Button } from "./MainAppContainer";

const imageFinal = require(`../images/${Math.ceil(Math.random() * 4)}.jpg`);

function DisplayPost() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery(id && ["post", id], onePost);
  const history = useHistory();
  const { darkMode } = useContext(StyleContext);

  function handleBack() {

    setTimeout(() => {
      history.push("/");
    }, 1000);
    document.querySelector("#displayContainer").style.cssText = "opacity: 0;transition: all 1s ease-in-out";
    return;
  }

  useEffect(() => {
    document.body.style.cssText = "opacity:1";
    return;
  });

  if (isLoading) return <p>loading...</p>;

  if (error)
    return (
      <p>error loading data, check the user id again as it might not exist</p>
    );

  return (
    <Container theme={darkMode} id = "displayContainer">
      <ImageContainer
        theme={darkMode}
        name={{ name: data.name, lastname: data.lastname }}
      >
        <ButtonBottom
          onClick={() => handleBack()}
          style={{ padding: "5px 10px" }}
        >
          Back
        </ButtonBottom>
      </ImageContainer>
      <Content>
        <Name>
          {data.name} {data.lastname}
        </Name>

        <br />
        {data.email}
        <br />
        {data.username}
      </Content>
    </Container>
  );
}

export default DisplayPost;

export const bringPost = keyframes`
  0% {
    transform: scaleX(0)
  }
  100% {
    transform: scaleX(1)
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  transform: translateX(100vw);
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 5fr 2fr;
  grid-template-areas: "image content";
  transform-origin: right;
  animation: ${bringPost} 500ms ease-in-out forwards;

  ${({ theme }) =>
    theme &&
    `
  background-color:black;
  color: white`}

  ${({ theme }) =>
    !theme &&
    `
  background-color:white;
  color: black`}
`;

export const expandimage = keyframes`
 0% {
   transform: scaleX(1)
 }
 100% {
   transform: scaleX(0)
 }
`;

const opacitytoone = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;

export const ImageContainer = styled.div`
  grid-area: image;
  background-image: url(${imageFinal.default});
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - 4em);
  width: 60vw;
  opacity: 0.1;
  animation: ${opacitytoone} 2s forwards;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;

  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    background-color: black;
    transform-origin: left;
    animation: ${expandimage} 1s ease-out forwards;
  }
  &::after {
    content: "${(props) => props.name.name + " " + props.name.lastname}";
    position: absolute;
    width: 100px;
    height: 100px;
    font-size: 7rem;
    font-weight: bolder;
    color: white;
    right: 5%;
    bottom: 30%;
    opacity: 0;
    animation: ${opacitytoone} 1s forwards;
    animation-delay: 750ms;
  }
`;

export const Content = styled.div`
  grid-area: content;
  width: 100%;
  height: 100%;
  background-color: red;
  color: white;
  padding: 2em;
`;

const Name = styled.div`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: bolder;
`;

const ButtonBottom = styled(Button)`
  margin: 5px;
`;
