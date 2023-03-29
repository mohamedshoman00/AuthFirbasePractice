import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const UpdateProfile = () => {
  const { currentUser, updateUserEmail, updateUserPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nav = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }
    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateUserEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updateUserPassword(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        nav("/");
      })
      .catch(() => {
        setError("Failed to Update account");
      })
      .finally(() => {
        setLoading(false);
      });
    // setLoading(false);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update your Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="Email">Email</Form.Label>
              <Form.Control
                id="Email"
                type="email"
                placeholder="Enter Email"
                ref={emailRef}
                required
                defaultValue={currentUser?.email}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="Password">Password</Form.Label>
              <Form.Control
                id="Password"
                type="password"
                placeholder="Enter Password"
                ref={passwordRef}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password-confirm">
                Confirm Password
              </Form.Label>
              <Form.Control
                id="password-confirm"
                type="password"
                placeholder="Confirm Password"
                ref={passwordConfirmRef}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-3"
              disabled={loading}
            >
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
    </>
  );
};

export default UpdateProfile;
