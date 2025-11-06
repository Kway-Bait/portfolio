import { useEffect } from 'react';

import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home.js';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="bg-bgclr-0 min-h-screen text-center">
            <Home />
        </div>
    );
}

export default App;
