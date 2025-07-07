import React from "react";
import JobCard from "../components/JobCard";
import { useState } from "react";
import { useEffect } from "react";
import { getAllJobs } from "../api/jobApi";
import SearchBar from "../components/SearchBar";
import { SyncLoader } from "react-spinners";
import Faq from "../components/Faq";
const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      !search ||
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.description.toLowerCase().includes(search.toLowerCase())
  );
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
      <div className="mb-8 flex flex-col md:flex-row lg:mt-5 ">
        <h1 className="text-3xl font-bold mb-4 ">
          Spark Your Career with BlazeHire
        </h1>
        <SearchBar
          onSeachRemove={() => setSearch("")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></SearchBar>
      </div>
      {!isLoading && jobs.length === 0 && (
        <p className="flex items-center justify-center text-primary font-bold text-2xl">
          No jobs for now
        </p>
      )}
      {isLoading && (
        <div className="flex items-center justify-center h-24">
          <SyncLoader color="#dc2626" />
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {!isLoading &&
          filteredJobs.length > 0 &&
          filteredJobs.map((job) => {
            return <JobCard key={job.id} job={job}></JobCard>;
          })}
        {filteredJobs.length === 0 && jobs.length !== 0 && (
          <p>No jobs found matching your search.</p>
        )}
      </div>
      <Faq></Faq>
    </div>
  );
};

export default HomePage;
