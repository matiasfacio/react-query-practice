import { useMutation, useQueryClient } from "react-query";

function usePostMutation() {
  const queryClient = useQueryClient();
  return useMutation((value) =>
    fetch("http://localhost:4000/updatePost", {
      method: "PATCH",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    }),
    {
        onSuccess: ()=> queryClient.invalidateQueries('posts'),
        onError: () => alert('sorry, there was a problem')
    }
  );
}

export default usePostMutation;
