import React, { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import JoblyApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";

const JobList = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    async function getJobs() {
      let jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    }
    getJobs();
  }, []);

  if (!jobs) return <LoadingSpinner />;

  return (
    <div className="JobList col-md-8 offset-md-2">
      {jobs.length ? (
        <JobCardList jobs={jobs} />
      ) : (
        <p className="lead">Sorry, no results were found!</p>
      )}
    </div>
  );
};

export default JobList;
