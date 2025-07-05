import axios from "axios";
const BASE_URL = "http://localhost:3000/jobs";
export const getAllJobs = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const createJob = async (jobData) => {
  try {
    const response = await axios.post(BASE_URL, jobData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getJobById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
