// import './output.css';
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

// CSS Class
const navbar_button = (
    "mx-3 backdrop-blur-md hover:text-txtclr"
)

function App() {
    return (
        <div class="bg-bgclr-0 text-center">
            <BrowserRouter>
                <nav class="flex p-4 pr-5 justify-end text-2xl text-txtclr-muted font-mono font-semibold">
                    <div class={navbar_button}><Link to="/">Home</Link></div>
                    <div class={navbar_button}><Link to="/about">About</Link></div>
                    <div class={navbar_button}><Link to="/contact">Contact</Link></div>
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
