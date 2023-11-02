import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmitButton = (e) => {
    e.preventDefault();
    const data = {
      name: username,
      password: pass
    };

    if (selectedOption === "manager") {
      axios
        .post("http://localhost:8080/manager/signup", data)
        .then((response) => {
          console.log("Manager Signup successful:", response.data);
          localStorage.setItem("token", response.data);
        })
        .catch((error) => {
          console.error("Manager signup failed:", error);
        });
    } else {
      axios
        .post("http://localhost:8080/auth/signup", data)
        .then((response) => {
          console.log("Signup successful:", response.data);
          localStorage.setItem("token", response.data);
        })
        .catch((error) => {
          console.error("signup failed:", error);
        });
    }
  };

  return (
    <>
      <div className="job-background">
        <div className="title">
          <h2>Signup</h2>
        </div>
      </div>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="selectInput" />
            <select
              className="form-control"
              id="selectInput"
              onChange={handleSelectChange}
              value={selectedOption}
            >
              <option value="manager">Manager</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="form-group">
            <label id="name-label" htmlFor="name">
              Username
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label id="name-label" htmlFor="name">
              Enter Password
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Password"
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="submit-button"
              onClick={handleSubmitButton}
            >
              Submit
            </button>
          </div>
        </form>
        Already Registered <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default Signup;
