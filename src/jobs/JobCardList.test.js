import React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";
import JobCardList from "./JobCardList";
import { UserProvider } from "../testUtils";

it("matches snapshot", function () {
  let jobs = [{ title: "CEO", salary: 1000000, equity: 10, id: "testid" }];
  const { asFragment } = render(
    <UserProvider>
      <JobCardList jobs={jobs}>{/* <JobCard item={item} /> */}</JobCardList>
    </UserProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
