import React from "react";
import "./JobCard.css";

const JobCard = ({ id, salary, equity, title, companyName }) => {
  return (
    <div className="JobCard card">
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p>
          <small>Salary: {salary}</small>
        </p>
        <p>
          <small>Equity: {equity}</small>
        </p>
      </div>
    </div>
  );
};

export default JobCard;
