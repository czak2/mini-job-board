const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobs.controller");
router.post("/", jobController.addJob);
router.get("/", jobController.getAllJobs);
router.get("/:id", jobController.getJobById);
module.exports = router;
