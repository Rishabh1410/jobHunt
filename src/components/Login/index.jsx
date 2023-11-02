import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
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
      password: pass,
    };

    if (selectedOption === "manager") {
      axios
        .post("http://localhost:8080/manager/login", data)
        .then((response) => {
          console.log("Manager Signup successful:", response.data);
          localStorage.setItem("token", {
            userType: "manager",
            id: response.data,
          });
        })
        .catch((error) => {
          console.error("Manager signup failed:", error);
        });
    } else {
      axios
        .post("http://localhost:8080/auth/login", data)
        .then((response) => {
          console.log("Signup successful:", response.data);
          localStorage.setItem("token", {
            userType: "employee",
            id: response.data,
          });
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
          <h2>Login</h2>
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
        New Here? <Link to="/signup">Register</Link>
      </div>
      {/* <Navbar />
      <div className="banner-img">
        <div className="title">
          <h3>
            Find the <span>Right Job</span> In the
            <br />
            <span> Right Companies</span>
          </h3>
          <div className="small-tagline">
            <p>Got fired..!! Get Ready to be hired</p>
          </div>
        </div>
        <div className="button" data-testid="btn">
          <Link to="/Jobs">Browse Jobs</Link>
        </div>
      </div>
      <div className="social-media" data-testid="images">
        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d7e0c401a3e668a1d_facebook-logo.svg" alt="fb" />
        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d68c9b0a57ed94925_google-logo.svg" alt="google" />
        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc333df3521cce5b6a_youtube-logo-jobs-webflow-template.svg" alt="youtube" />
        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc774d5a00bcbb0baf_linkedin-logo-jobs-webflow-template.svg" alt="linkedin" />
      </div> */}
    </>
  );
};

export default Home;
