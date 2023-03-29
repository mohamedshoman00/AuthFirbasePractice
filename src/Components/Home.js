import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Home = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const nav = useNavigate();
  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      nav("/login");
    } catch {
      setError("Failed to log out");
    }
  };
  return (
    <>
      {" "}
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <p>
            <strong>Email: </strong>
            {currentUser && currentUser.email}
          </p>
          <Link to="update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button className="btn btn-primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
