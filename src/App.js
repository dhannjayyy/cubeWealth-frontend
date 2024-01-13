import React from "react";
import Body from "./Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Body}>
          <Route path="/" Component={SignUp} />
          <Route path="/login" Component={Login} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
