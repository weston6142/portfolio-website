import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Experience from "./components/Experience";
import styled, { ThemeProvider } from "styled-components";
import theme from "./components/Theme";

// stylize App div
const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  overflow: auto; /* Add this line to enable scrolling */
  position: relative;
`;

function Resume() {
  return (
    <object
      data="Weston_Bushyeager_Resume.pdf"
      type="application/pdf"
      width="100%"
      height="100%"
    >
      <p>
        It appears you don't have a PDF plugin for this browser. No biggie...
        you can{" "}
        <a href="Weston_Bushyeager_Resume.pdf">
          click here to download the PDF file.
        </a>
      </p>
    </object>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppDiv>
        <Router>
          <Routes>
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<Experience />} />
          </Routes>
        </Router>
      </AppDiv>
    </ThemeProvider>
  );
}

export default App;
