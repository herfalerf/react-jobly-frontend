import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobCardList from "../jobs/JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";

//CompanyDetail - gives details about a company, including open jobs.  Uses the JobCardList.  Accessed through the companies/:handle route

const CompanyDetail = () => {
  const { handle } = useParams();
  console.debug("CompanyDetail", "handle=", handle);

  const [company, setCompany] = useState(null);

  //function for API call for specific company.
  useEffect(
    function getCompanyAndJobsForUser() {
      async function getCompany() {
        let res = await JoblyApi.getCompany(handle);

        setCompany(res);
      }
      getCompany();
    },
    [handle]
  );
  if (!company) return <LoadingSpinner />;
  console.debug(company);

  return (
    <div className="CompanyDetail col-md-8 offset-md-2">
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  );
};

export default CompanyDetail;
