const fs = require("fs").promises;
const path = require("path");

const dataDir = path.join(__dirname, "../data");
const jobsFilePath = path.join(dataDir, "jobs.json");

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
      id: jobs.length + 1,
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

module.exports = {
  getAllJobs,
  addJob,
  getJobById,
};
