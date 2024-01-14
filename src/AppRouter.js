import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./Pages/Login";
import Layout from "./Layout";
import SignUp from "./Pages/SignUp";
import Tasks from "./Pages/Tasks";
import ProtectedRoute from "./Components/ProtectedRoute";
import PersistentLogin from "./Components/PersistentLogin";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route path="/" Component={SignUp} />
          <Route path="/login" Component={LogIn} />

          {/* protected routes */}
          <Route element={<PersistentLogin />}>
            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" Component={Tasks} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
