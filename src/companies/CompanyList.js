import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";
import SearchForm from "../common/SearchForm";

//List of company cards displayed on the /companies route.  Search function is passed to SearchForm which is rendered on the same page.

const CompanyList = () => {
  const [companies, setCompanies] = useState(null);

  //function which gets companies list when route is accessed.
  useEffect(function getCompaniesOnMount() {
    console.debug("CompanyList useEffect getCompaniesOnMount");
    search();
  }, []);

  //search function allows for searching by company name
  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return <LoadingSpinner />;
  return (
    <div className="CompanyList col-md-8 offset-md-2">
      <SearchForm searchFor={search} />
      {companies.length ? (
        <div className="CompanyList-list">
          {companies.map((company) => (
            <CompanyCard
              key={company.handle}
              handle={company.handle}
              name={company.name}
              description={company.description}
            />
          ))}
        </div>
      ) : (
        <p className="lead">Sorry, no results were found!</p>
      )}
    </div>
  );
};

export default CompanyList;
