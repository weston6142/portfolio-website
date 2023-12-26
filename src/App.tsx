import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Experience from "./components/Experience";
import theme from "./components/Theme";

// stylize App div
const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  overflow: auto; /* Add this line to enable scrolling */
  position: relative;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppDiv>
        <Experience />
      </AppDiv>
    </ThemeProvider>
  );
}

export default App;
