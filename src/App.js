// import './output.css';
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

function App() {
  return (
        <div class="bg-bgbase text-center">
            <BrowserRouter>
                <nav class="flex p-2 pr-5 justify-end text-2xl text-gray-400 font-semibold">
                    <div class="mx-3"><Link to="/">Home</Link></div>
                    <div class="mx-3"><Link to="/about">About</Link></div>
                    <div class="mx-3"><Link to="/contact">Contact</Link></div>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;
