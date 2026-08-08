import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import ITServices from './views/ITServices';
import IoTServices from './views/IoTServices';
import Industries from './views/Industries';

function App() {
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
