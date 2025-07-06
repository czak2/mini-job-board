import React from "react";
import { Link } from "react-router";
const JobCard = ({ job }) => {
  return (
    <div className="bg-red-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 w-full max-w-sm sm:max-w-md mx-auto hover:bg-red-100">
      <div className="h-2 bg-primary rounded-lg"></div>
      <div className="p-4 sm:p-6">
        <div className="mb-3 sm:mb-4">
          <h3 className="text-base sm:text-lg font-bold text-primary mb-1 whitespace-nowrap ">
            <span className="text-primary-dark font-medium">Job Title: </span>
            {job.title}
          </h3>
          <p className="text-sm sm:text-md text-secondary font-semibold">
            <span className="text-primary-dark font-medium">
              Company Name :{" "}
            </span>
            {job.company}
          </p>
        </div>
        <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-5">
          <span className="flex items-center text-xs sm:text-sm text-secondary">
            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
            {job.location}
          </span>
        </div>
        <p className="text-sm lg:text-md text-gray-700 mb-4 sm:mb-6">
          <span className="text-primary-dark font-medium">Description: </span>
          {job.description.substring(0, 10)}...
        </p>
        <div className="flex items-center justify-end">
          <Link
            to={`/jobs/${job.id}`}
            className="px-3 sm:px-4 py-2 bg-primary text-white text-xs sm:text-sm font-medium rounded-md hover:bg-primary-dark transition duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default JobCard;
