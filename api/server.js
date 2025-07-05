const express = require("express");
const app = express();
app.use(express.json());
app.use((req, res) => {
  res.send("API  running");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
