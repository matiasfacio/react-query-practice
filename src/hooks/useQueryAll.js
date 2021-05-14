import { useQuery } from "react-query";

function useQueryAll() {
  
  return useQuery("posts", async ()=> await fetch("http://localhost:4000/all").then((res) => res.json()));
}

export default useQueryAll;
