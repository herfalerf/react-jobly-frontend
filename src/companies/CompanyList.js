import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    getCompanies();
  }, [companies.length]);

  if (!companies) return <LoadingSpinner />;
  return (
    <div>
      <h1>Company List</h1>

      {companies.map((company) => (
        <CompanyCard company={company} />
      ))}
    </div>
  );
};

export default CompanyList;
