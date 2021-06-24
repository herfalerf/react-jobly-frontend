import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const CompanyCard = ({ company }) => {
  return (
    <Link to={`/companies/${company.handle}`} className="add-link">
      <section className="col-md-4">
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              {company.name}
            </CardTitle>
            <CardText>{company.description}</CardText>
          </CardBody>
        </Card>
      </section>
    </Link>
  );
};

export default CompanyCard;
