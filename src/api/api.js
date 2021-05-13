export function fetchData() {
  return fetch("http://localhost:4000/all").then((res) => res.json());
}

export const onePost = async ({ queryKey }) => {
  const theId = +queryKey[1];

  try {
    const result = await fetch(`http://localhost:4000/one/${theId}`);
    const data = result.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
