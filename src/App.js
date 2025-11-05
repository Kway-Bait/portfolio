import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

// CSS Class
const navbar_button = (
    "mx-3 backdrop-blur-md hover:text-txtclr"
)

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="bg-bgclr-0 min-h-screen text-center">
            <BrowserRouter>
                <nav className="fixed min-w-full flex p-4 pr-5 justify-end text-2xl bg-transparent text-txtclr-muted font-mono font-semibold z-30">
                    <div className={navbar_button}><Link to="/">Home</Link></div>
                    <div className={navbar_button}><Link to="/about">About</Link></div>
                    <div className={navbar_button}><Link to="/contact">Contact</Link></div>
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
