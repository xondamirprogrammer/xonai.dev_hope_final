import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import XonaiWebsite from './components/ui/component';
import Documentation from './components/Documentation';

function App() {
  return (
    <Router>
      <div style={{ width: '100%', minHeight: '100vh', margin: 0, padding: 0 }}>
        <Routes>
          <Route path="/" element={<XonaiWebsite />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;