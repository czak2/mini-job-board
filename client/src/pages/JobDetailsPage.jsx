import React from "react";
import { Link, useParams } from "react-router";
import { IoArrowBackOutline } from "react-icons/io5";
const JobDetailsPage = () => {
  const { id } = useParams();

  const job = {
    id,
    title: "TEst deve",
    company: "TEst company",
    location: "Mumbai",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere itaque repellat rem ullam. Quae, ea similique sint minima, quod recusandae explicabo ad incidunt voluptatem animi non, quis perspiciatis dolorem libero?",
  };

  return (
    <div className="bg-primary-light/5 min-h-screen py-8">
      <div className="mb-8">
        <Link to={"/"} className="text-primary hover:underline">
          <IoArrowBackOutline className="inline-block" /> Back
        </Link>
      </div>
      <div className="container mx-auto px-4">
        <div className="bg-primary py-6 px-8 rounded-t-lg">
          <h1 className="text-2xl font-semibold text-white">{job.title}</h1>
        </div>
        <div className="bg-white rounded-b-lg shadow-sm p-6 flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <h2 className="text-xl font-semibold text-primary mb-3">
              Job Description
            </h2>
            <p className="text-base font-normal text-gray-700">
              {job.description}
            </p>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-xl font-semibold text-primary mb-3">Details</h2>
            <p className="text-base font-medium text-primary-dark mb-2">
              {job.company}
            </p>
            <div className="flex items-center text-base font-medium text-primary-dark mb-4">
              <span className="w-2 h-2 rounded-full bg-primary-light mr-2"></span>
              {job.location}
            </div>
            <Link
              to="/"
              className="px-4 py-2 bg-secondary text-white text-base font-semibold rounded-md hover:bg-primary-dark transition duration-200"
            >
              Apply here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
