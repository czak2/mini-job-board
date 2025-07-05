import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import JobDetailsPage from "./pages/JobDetailsPage";
import PostJobPage from "./pages/PostJobPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="jobs/:id"
          element={<JobDetailsPage></JobDetailsPage>}
        ></Route>
        <Route path="post-job" element={<PostJobPage></PostJobPage>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
