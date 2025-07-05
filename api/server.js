const express = require("express");
const app = express();
const jobRoutes = require("./src/routes/job.routes");
app.use(express.json());

app.use("/jobs", jobRoutes);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
