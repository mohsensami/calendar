import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import { Header } from "./components/Header";

import Home from "./pages/Home";
import Single from "./pages/Single";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Single />} />
            <Route path="/create" element={<CreatePost />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
