import React from "react";
import { useQuery } from "react-query";
import { fetchData } from "../api/api";
import styled from "styled-components";
import { useHistory } from "react-router";
// import { Button } from "./MainAppContainer";
import { Button } from "antd";

export default function Posts() {
  const { data, isLoading, isFetching } = useQuery("posts", fetchData);
  const History = useHistory();

  function handleRouting(id) {
    setTimeout(() => {
      document.body.style.cssText = "transform: translateX(0vw); opacity: 0;";
      History.push(`/post/${id}`);
    }, 1500);
    document.body.style.cssText =
      "transform: translateX(-100vw); transition: transform 1s ease-in-out";
    return;
  }

  if (isLoading) return <p>Loading...</p>;

  if (isFetching) return <p>Fetching</p>;

  return (
    <div>
      <h2>Teachers</h2>
      {data && (
        <AllPost>
          {data.map((p) => {
            return (
              <User key={Math.random()}>
                <p>
                  {p.name} {p.lastname}
                </p>
                <p>
                  {p.id} - {p.username}
                </p>{" "}
                {p.telephone && <p>Telephone: {p.telephone}</p>}
                <p style={{ color: "white", fontStyle: "italic" }}>{p.email}</p>
                <Button
                  type="primary"
                  danger
                  onClick={() => handleRouting(p.id)}
                >
                  More...
                </Button>
              </User>
            );
          })}
        </AllPost>
      )}
    </div>
  );
}

export const User = styled.div`
  padding: 20px 0;
  width: 300px;
`;
export const AllPost = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  background-color: #232324;
  padding: 20px;
`;
