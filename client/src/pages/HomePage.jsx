import React from "react";
import JobCard from "../components/JobCard";

const HomePage = () => {
  const jobs = [
    {
      id: 1,
      title: "Full stack",
      company: "Tst ",
      location: "Banglore",
      description:
        "cloremdfbjfbsdjfbsdjfbsdjfbsjbdcbxloremdfbjfbsdjfbsdjfbsdjfbsjbdcbx",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "Hello123",
      location: "Joghpur",
      description: "testing123",
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "Hello123",
      location: "Joghpur",
      description: "testing123",
    },
    {
      id: 4,
      title: "Backend Engineer",
      company: "test123",
      location: "Joghpur",
      description: "testing123",
    },
  ];
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 ">
          Spark Your Career with BlazeHire
        </h1>
        search bar
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => {
          return <JobCard key={job.id} job={job}></JobCard>;
        })}
      </div>
    </div>
  );
};

export default HomePage;
