import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import Job from "./../../Assets/jobs.json";
import Filter from "../Filter";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import axios from "axios";

// const experience = [
//   { min: 0, max: 1 },
//   { min: 2, max: 3 },
//   { min: 4, max: 5 },
//   { min: 5, max: 10 }
// ];

const Jobs = ({ userInfo }) => {
  const userType = userInfo.userType;
  const userId = userInfo.id;
  const navigate = useNavigate();

  let jobData;

  if (userType === "manager") {
    console.log("I am here");
    // axios
    //   .get(`http://localhost:3000/api/jobpost?${userId}`)
    //   .then((response) => {
    //     setJobData(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error while retrieving jobs: ", error);
    //   });
    jobData = [{ id: 1, jobTitle: "job1", manId: 0, des: "java dev needed" }];
  } else {
    axios
      .get("http://localhost:3000/api/applications")
      .then((response) => {
        // setJobData(response.data);
      })
      .catch((error) => {
        console.error("Error while retrieving jobs: ", error);
      });
  }

  const handleApply = () => {
    // Implement your "Apply" button logic here (e.g., send an application request).
    if (userType === "manager") {
      navigate("/", );
    }
  };

  return (
    <>
      <Navbar userInfo={userInfo} />
      <div className="jobs-for-you">
        <div className="job-background">
          <div className="title">
            <h2>Our Jobs</h2>
          </div>
        </div>
        <div className="job-section">
          <div className="job-page">
            {jobData.map((job) => (
              <div className="job-card">
                <h2>{job.jobTitle}</h2>
                <p>{job.des}</p>
                <p>Manager ID: {job.manId}</p>
                <button onClick={handleApply}>
                  {userType === "manager" ? "Applicants" : "Apply"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
