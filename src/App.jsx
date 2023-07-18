import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddEditBlog from './pages/AddEditBlog';
import Single from './pages/Single';
import Layout from './components/Layout';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <div className="App">
                    <Routes>
                        {/* <Route path="*" element={<NotFound />} /> */}
                        <Route path="/" element={<Home />} />
                        <Route path="/create" element={<AddEditBlog />} />
                        <Route path="/update/:id" element={<AddEditBlog />} />
                        <Route path="/single/:id" element={<Single />} />
                    </Routes>
                </div>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
