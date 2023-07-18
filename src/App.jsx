import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddEditBlog from './pages/AddEditBlog';
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
                    </Routes>
                </div>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
