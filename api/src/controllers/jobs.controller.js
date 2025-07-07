const fs = require("fs").promises;
const path = require("path");

const dataDir = path.join(__dirname, "../data");
const jobsFilePath = path.join(dataDir, "jobs.json");
const applicationFilePath = path.join(dataDir, "applications.json");
async function checkFileExists() {
  try {
    await fs.access(jobsFilePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.mkdir(dataDir, { recursive: true });
      await fs.writeFile(jobsFilePath, "[]", "utf-8");
    } else {
      throw error;
    }
  }
}
async function checkApplicationFileExits() {
  try {
    await fs.access(applicationFilePath);
  } catch (error) {
    await fs.writeFile(applicationFilePath, "[]", "utf-8");
  }
}
async function getAllJobs(req, res) {
  try {
    await checkFileExists();
    const data = await fs.readFile(jobsFilePath, "utf8");
    const jobs = JSON.parse(data);
    res.json(jobs);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send("Error getting jobs");
  }
}

async function addJob(req, res) {
  try {
    await checkFileExists();
    const data = await fs.readFile(jobsFilePath, "utf8");
    const jobs = JSON.parse(data);

    const newJob = {
      id: Date.now(),
      ...req.body,
    };
    jobs.push(newJob);

    await fs.writeFile(jobsFilePath, JSON.stringify(jobs));
    res.status(201).json(newJob);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send("Error adding job");
  }
}
async function getJobById(req, res) {
  try {
    await checkFileExists();
    const data = await fs.readFile(jobsFilePath, "utf8");
    const jobs = JSON.parse(data);
    const job = jobs.find((j) => j.id === parseInt(req.params.id));

    if (!job) {
      return res.status(404).send("Job not found");
    }
    res.json(job);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send("Error getting job");
  }
}

async function applyToJobs(req, res) {
  try {
    await checkApplicationFileExits();
    const { id } = req.params;

    const applicationData = req.body;
    const data = await fs.readFile(applicationFilePath, "utf-8");
    const applications = JSON.parse(data);
    const newApplication = {
      id: Date.now(),
      jobId: id,
      ...applicationData,
    };

    applications.push(newApplication);
    await fs.writeFile(applicationFilePath, JSON.stringify(applications));

    res.status(201).json(newApplication);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error applying to job");
  }
}

module.exports = {
  getAllJobs,
  addJob,
  getJobById,
  applyToJobs,
};
