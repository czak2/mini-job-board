import React from "react";
import { Link } from "react-router";
const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 w-full max-w-md mx-auto hover:bg-red-100">
      <div className="h-2 bg-primary"></div>
      <div className="p-4 sm:p-6">
        <div className="mb-3 sm:mb-4">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
            {job.title}
          </h3>
          <p className="text-sm sm:text-sm text-gray-600">{job.company}</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5">
          <span className="flex items-center text-xs sm:text-sm text-gray-600">
            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
            {job.location}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-gray-700 mb-4 sm:mb-6">
          {job.description}
        </p>
        <div className="flex items-center justify-end">
          <Link
            to={`/jobs/${job.id}`}
            className="px-3 sm:px-4 py-1 sm:py-2 bg-primary text-white text-xs sm:text-sm font-medium rounded-md hover:bg-primary-dark transition duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default JobCard;
