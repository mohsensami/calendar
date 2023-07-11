import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import PostsPanel from "./pages/panel/Posts";
import Home from "./pages/front/Home";
import SinglePost from "./pages/panel/SinglePost";
import CreatePost from "./pages/panel/createPost";

function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="panel" element={<PostsPanel />} />
            <Route path="panel/:id" element={<SinglePost />} />
            <Route path="panel/create-post" element={<CreatePost />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
