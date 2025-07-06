import React, { useState } from "react";
import { applyToJob } from "../api/jobApi";
import { useNavigate } from "react-router";

const Applyform = ({ jobId, onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resumeUrl: "",
    coverLetter: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await applyToJob(jobId, formData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    onClose;
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-primary">
        Apply for this Position
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-base font-medium text-primary-dark mb-1">
            Full Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-primary-light rounded-md text-base font-normal text-gray-700 focus:outline-none focus:border-primary"
              placeholder="Enter your full name"
              required
            />
          </label>
        </div>
        <div>
          <label className="block text-base font-medium text-primary-dark mb-1">
            Email Address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-primary-light rounded-md text-base font-normal text-gray-700 focus:outline-none focus:border-primary"
              placeholder="Enter your email"
              required
            />
          </label>
        </div>
        <div>
          <label className="block text-base font-medium text-primary-dark mb-1">
            Resume URL (Optional)
            <input
              type="url"
              name="resumeUrl"
              value={formData.resumeUrl}
              onChange={handleChange}
              className="w-full p-2 border border-primary-light rounded-md text-base font-normal text-gray-700 focus:outline-none focus:border-primary"
              placeholder="http://example.com"
            />
          </label>
        </div>
        <div>
          <label className="block text-base font-medium text-primary-dark mb-1">
            Cover Letter
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              className="w-full p-2 border border-primary-light rounded-md text-base font-normal text-gray-700 focus:outline-none focus:border-primary"
              placeholder="Enter your cover letter"
              required
            />
          </label>
        </div>
        <div className="flex flex-col sm:flex-row justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-200 text-gray-700 text-base font-semibold rounded-md hover:bg-gray-300 transition duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-3 sm:px-4 py-1 sm:py-2 bg-primary text-white text-base font-semibold rounded-md hover:bg-primary-dark transition duration-200 "
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default Applyform;
