import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";

import Main from "./containers/Main";
import Login from "./containers/Login";
import BackgroundImg from "./img/todo_background.jpg";

const Background = styled.div`
  background-image: url(${BackgroundImg});
  width: 100vw;
  height: 100vh;
  background-position: center center;
  display: table-cell;
`;

function App() {
  console.log(window.location);
  return (
    <Background>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login></Login>} />
          <Route path="/*" element={<Main></Main>} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default App;
