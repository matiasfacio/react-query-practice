import React from "react";
import usePostQuery from "../hooks/usePostQuery";
import { Button } from "antd";
// import { Button } from "./MainAppContainer";
import { useHistory } from 'react-router-dom'

function GetPost({ id }) {
  const queryOnePost = usePostQuery(id);
  // const {data, isLoading, error} = useQuery(id && ["post", id], onePost)
  const history = useHistory()

  function handleRouting(id) {
    setTimeout(() => {
      document.body.style.cssText = "transform: translateX(0vw); opacity: 0;";
      history.push(`/post/${id}`);
    }, 1500);
    document.body.style.cssText =
      "transform: translateX(-100vw); transition: transform 1s ease-in-out";
    return;
  }

  if (queryOnePost.isLoading) return <p>loading...</p>;

  if (queryOnePost.isError)
    return (
      <p>error loading data, check the user id again as it might not exist</p>
    );

  return (
    <div>
      {!queryOnePost.data && <p>Id doesn't exist</p>}
      {queryOnePost.data?.name && (
        <div>
          <p>
            {queryOnePost.data.id} - {queryOnePost.data.name} {queryOnePost.data.lastname}
          </p>
          <Button type = "primary" danger onClick={(e) => handleRouting(queryOnePost.data.id)}>
            More...
          </Button>
        </div>
      )}
    </div>
  );
}

export default GetPost;
