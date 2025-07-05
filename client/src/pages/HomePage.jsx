import React from "react";
import JobCard from "../components/JobCard";
import { useState } from "react";
import { useEffect } from "react";
import { getAllJobs } from "../api/jobApi";

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchJobs = async () => {
      const jobsData = await getAllJobs();

      setJobs(jobsData);
      setIsLoading(false);
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 ">
          Spark Your Career with BlazeHire
        </h1>
        search bar
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading && <p>Loading </p>}
        {!isLoading && jobs.length === 0 && <p>No data found</p>}
        {!isLoading &&
          jobs.map((job) => {
            return <JobCard key={job.id} job={job}></JobCard>;
          })}
      </div>
    </div>
  );
};

export default HomePage;
