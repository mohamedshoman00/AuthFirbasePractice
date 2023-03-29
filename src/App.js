import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import ForgotPassword from "./Components/ForgotPassword";
import Home from "./Components/Home";
import LoginForm from "./Components/LoginForm";
import NavBar from "./Components/NavBar";
import SignUpForm from "./Components/SignUpForm";
import UpdateProfile from "./Components/UpdateProfile";
import RequireAuth from "./Context/RequireAuth";
function App() {
  return (
    <>
      <NavBar />
      <Container
        className="d-flex align-items-center justify-content-center "
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </div>
      </Container>
    </>
  );
}
export default App;
