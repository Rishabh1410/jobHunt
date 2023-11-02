import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = ({ userInfo }) => {
  return (
    <>
      <div className="main-page">
        <nav id="navbar">
          <h1 className="logo">
            Job<span>Hunt</span>
          </h1>

          <ul>
            {/* <li>
              <Link to="/ho
              me">Home</Link>
            </li> */}
            {userInfo.userType === "employee" && (
              <li>
                <Link to="/jobs">Applied Jobs</Link>
              </li>
            )}
            {userInfo.userType === "manager" && (
              <li>
                <Link to="/post-job">Post Job</Link>
              </li>
            )}
            {/* <li>
              <Link to="/saved-job">Saved Job</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
