import React from "react";
import { useState } from "react";
import Navbar from "../Navbar";
import "./index.css";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const [Jobid, setJobid] = useState("");
  const [jobTitle, setjobTitle] = useState("");
  const [Des, setDes] = useState("");

  const navigate = useNavigate();
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onabort = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleSubmitButton = (e) => {
    const jobPost = {
      Jobid,
      jobTitle,
      Des,
      Id
    };
    e.preventDefault();
    if (Jobid === "") {
      window.alert("Enter job id");
    } else if (jobTitle === "") {
      window.alert("Enter job title");
    } else if (Des === "") {
      window.alert("Enter description");
    } else {
      let savedItem = [];
      if (localStorage.getItem("item")) {
        savedItem = JSON.parse(localStorage.getItem("item"));
      }
      localStorage.setItem("item", JSON.stringify([...savedItem, { jobPost }]));
      window.alert("Form Submitted Successfully");
      navigate("/Jobs");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="job-background">
        <div className="title">
          <h2>Post a Job</h2>
        </div>
      </div>
      <div className="container">
        <header className="header">
          <h1 className="post-job">Fill the form </h1>
        </header>
        <form>
          <div className="form-group">
            <label id="name-label" htmlFor="name">
              job id
            </label>
            <input
              type="text"
              name="Jobid"
              className="form-control"
              placeholder="Enter jobId"
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label id="name-label" htmlFor="name">
              job title
            </label>
            <input
              type="text"
              name="jobTitle"
              className="form-control"
              placeholder="Enter job title"
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label id="name-label" htmlFor="name">
              job title
            </label>
            <input
              type="text"
              name="Des"
              className="form-control"
              placeholder="Enter job description"
              onChange={(e) => setLocation(e.target.value)}
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
      </div>
    </div>
  );
};

export default PostJob;
