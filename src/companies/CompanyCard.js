import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

const CompanyCard = ({ handle, name, description }) => {
  return (
    <Link to={`/companies/${handle}`} className="CompanyCard card">
      <div className="card-body">
        <h6 className="card-title">{name}</h6>
        <p>
          <small>{description}</small>
        </p>
      </div>
    </Link>
  );
};

export default CompanyCard;
