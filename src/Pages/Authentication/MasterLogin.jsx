import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Logo from "../Master/eSchools (2).png"

function SignIn({ setIsAuthenticated }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock authentication
    if (userId === "admin" && password === "password") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", true); // Persist authentication
      navigate("/master"); // Redirect to Dashboard
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
      <span className="text-center mb-0"><img src={Logo} alt="logo" /></span>
      
        {error && (
          <Alert variant="danger" onClose={() => setError("")} dismissible>
            {error}
          </Alert>
        )}
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formUserId">
            <Form.Label>User ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Sign In
          </Button>
        </Form>
        <div className="text-center mt-3">
          <a href="#" className="text-decoration-none">
            Forgot password?
          </a>
        </div>
        <p>userId = "admin"  password = "password"</p>
    
      </div>
    </div>
  );
}

export default SignIn;
