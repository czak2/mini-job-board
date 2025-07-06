const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobs.controller");
router.post("/", jobController.addJob);
router.get("/", jobController.getAllJobs);
router.get("/:id", jobController.getJobById);
router.post("/:id/apply", jobController.applyToJobs);
module.exports = router;
