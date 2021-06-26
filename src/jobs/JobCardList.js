import React from "react";
import JobCard from "./JobCard";

//This component renders the JobCard components.  This component is rendered in JobList and CompanyDetail components.  This is a dumb component.

const JobCardList = ({ jobs }) => {
  return (
    <div className="JobCardList">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          companyName={job.companyName}
        />
      ))}
    </div>
  );
};

export default JobCardList;
