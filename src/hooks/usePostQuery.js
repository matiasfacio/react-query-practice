import { useQuery } from "react-query";

function usePostQuery(theId) {
  return useQuery(
    theId && ["todo", theId],
    () =>
      fetch(`http://localhost:4000/one/${theId}`).then(function (res) {
        if (res.ok) {
          return res.json();
        }
        throw new Error("error fetching data");
      })
  );
}

export default usePostQuery;
