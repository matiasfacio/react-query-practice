import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useContext } from "react";
import { StyleContext } from "./contexts/StyleContext";
import styled from "styled-components";
import Routing from "./components/Routing"
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient();

function App() {
  const { darkMode } = useContext(StyleContext);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer active={darkMode}>
        <Routing/>
      </AppContainer>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

export const AppContainer = styled.div`
  padding: 30px;
  ${({ active }) =>
    active &&
    `
  background-color:black;
  color: white`}

  ${({ active }) =>
    !active &&
    ` 
  background-color: whitesmoke;
  color: black`}
`;

