import React from "react";
import "./App.css";
import styled from "styled-components";
import Experience2 from "./components/Experience2";

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
    <AppDiv>
      <Experience2 />
    </AppDiv>
  );
}

export default App;
