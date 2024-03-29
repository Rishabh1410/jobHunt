import "./App.css";
import Login from "./components/Login";
import Jobs from "./components/Jobs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostJob from "./components/PostJob";
import SaveJobs from "./components/SaveJobs";
import Signup from "./components/signup";
import Discussion from "./components/Discussion";
import ErrorPage from "./components/ErrorPage";
import ApplyJobs from "./components/ApplyJobs";

function App() {
  // const loggedInfo = localStorage.getItem("token");
  const loggedInfo = { userType: "manager", id: 0 };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={loggedInfo ? <Jobs userInfo={loggedInfo} /> : <Login />}
            />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/jobs" element={<Jobs />} /> */}
            <Route
              path="/post-job"
              element={<PostJob userInfo={loggedInfo} />}
            />
            <Route path="/apply-jobs" element={<ApplyJobs />} />
            {/* <Route path="/saved-job" element={<SaveJobs />} /> */}
            <Route path="/discussion" element={<Discussion />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
