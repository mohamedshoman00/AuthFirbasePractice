import React, { useRef, useState } from "react";
import { Alert, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const [message, setMessage] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("check your inbox to get new password");
    } catch {
      setError("Failed to Reset Password");
    }
    setLoading(false);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
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
            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-3"
              disabled={loading}
            >
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/Login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default ForgotPassword;
