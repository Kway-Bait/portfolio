import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

function App() {
  return (
        <BrowserRouter>
            <nav className="Navbar">
                <div className="Narbar-item"><Link to="/">Home</Link></div>
                <div className="Narbar-item"><Link to="/about">About</Link></div>
                <div className="Narbar-item"><Link to="/contact">Contact</Link></div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
