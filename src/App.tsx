import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PostDetailsPage } from "./pages/postDetails";
import { PostsPage } from "./pages/posts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
