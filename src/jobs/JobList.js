import React, { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import JoblyApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";
import SearchForm from "../common/SearchForm";

const JobList = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(function getJobsOnMount() {
    console.debug("JobsList useEffect getJobsOnMount");
    search();
  }, []);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) return <LoadingSpinner />;

  return (
    <div className="JobList col-md-8 offset-md-2">
      <SearchForm searchFor={search} />
      {jobs.length ? (
        <div className="JobsList-list">
          <JobCardList jobs={jobs} />
        </div>
      ) : (
        <p className="lead">Sorry, no results were found!</p>
      )}
    </div>
  );
};

export default JobList;
