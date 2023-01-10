import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import NavBar from './components/navBar/navBar.jsx';
import Home from './pages/components/home/home.jsx'
import GiftStep from './pages/components/giftstep/giftstep.jsx'

function App() {

  const [scrollHeight, setScrolHeight] = useState(0) 

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrolHeight(position); 
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/giftstep" element={<GiftStep />} />
          <Route path="*" element={`<h1>Page not found<h1/>`} />
        </Routes>
      </Router>
      <NavBar isScrolling={scrollHeight}/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;