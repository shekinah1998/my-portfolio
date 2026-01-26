import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import ResumeSection from './components/ResumeSection';
import About from './components/About';
import Navbar from './components/Navbar';
import './App.css';

// Component to handle Conditional Navbar
function Layout({ children }) {
  const location = useLocation();
  // Show Navbar on every page EXCEPT Home ("/")
  const showNavbar = location.pathname !== "/";
  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
}

function App() {
  // Theme State
  const [theme, setTheme] = useState('dark');

  // Toggle Function
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Apply theme to Body
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className="app-wrapper">
        {/* GLOBAL THEME TOGGLE (Top Right) */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<ResumeSection section="experience" />} />
            <Route path="/education" element={<ResumeSection section="education" />} />
            <Route path="/skills" element={<ResumeSection section="skills" />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;