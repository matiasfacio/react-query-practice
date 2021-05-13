import { useQueryClient, useMutation } from "react-query";

export default function usePost() {
  const queryClient = useQueryClient()

  return useMutation((values) =>
    fetch("http://localhost:4000/addPost", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: values,
    }),
    {
        onSuccess: ()=> { queryClient.invalidateQueries('posts')}
    }
  );
}


 