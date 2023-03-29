import React, { useRef, useState } from "react";
import { Alert, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const LoginForm = () => {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const location = useLocation();
  const nav = useNavigate();
  const redirectPath = location.state?.path || "/";
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      nav(redirectPath, { replace: true });
    } catch {
      setError("Failed to Log In");
    }
    setLoading(false);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="Email">Email address</Form.Label>
              <Form.Control
                id="Email"
                type="email"
                placeholder="Enter email"
                ref={emailRef}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="Password">Password</Form.Label>
              <Form.Control
                id="Password"
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-3"
              disabled={loading}
            >
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/forgot-password">Forgot Password</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default LoginForm;
