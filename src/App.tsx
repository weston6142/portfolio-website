import React from "react";
import "./App.css";
import styled from "styled-components";
import Experience from "./components/Experience";

// stylize App div
const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

function App() {
  return (
    <AppDiv>
      <Experience />
    </AppDiv>
  );
}

export default App;
