import React, { useState, useContext, useEffect } from "react";
import "./JobCard.css";
import UserContext from "../user/UserContext";

//Displays basic information about an individual job, rendered on the JobCardList which is rendered on the JobList and the CompanyDetail components.

const JobCard = ({ id, salary, equity, title, companyName }) => {
  console.debug("JobCard");

  //job application functions pulled from UserContext
  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  //Gets list of jobs user has applied to on component mount and sets the application status accordingly.
  useEffect(
    function updateAppliedStatus() {
      console.debug("JobCard useEffect updateAppliedStatus", "id=", id);

      setApplied(hasAppliedToJob(id));
    },
    [id, hasAppliedToJob]
  );

  //function for applying to a job.
  async function handleApply(evt) {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }
  return (
    <div className="JobCard card">
      {applied}
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p>{companyName}</p>
        <p>
          <small>Salary: {salary}</small>
        </p>
        <p>
          <small>Equity: {equity}</small>
        </p>

        <button
          className="btn btn-danger font-weight-bold text-uppercase float-right"
          onClick={handleApply}
          disabled={applied}
        >
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
