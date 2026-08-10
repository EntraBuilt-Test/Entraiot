import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import ITServices from './views/ITServices';
import IoTServices from './views/IoTServices';
import Industries from './views/Industries';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#fff', zIndex: 99999 }}>
        <img src="/poster.jpeg" alt="Splash Poster" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/it-services" element={<ITServices />} />
        <Route path="/iot-services" element={<IoTServices />} />
        <Route path="/industries" element={<Industries />} />
      </Routes>
    </Router>
  );
}

export default App;
