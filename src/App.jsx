import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import Posts from './pages/panel/Posts';
import SinglePost from './pages/panel/SinglePost';
import CreatePost from './pages/panel/createPost';

function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path="panel" element={<Posts />} />
                        <Route path="panel/:id" element={<SinglePost />} />
                        <Route path="panel/create-post" element={<CreatePost />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
