import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSEO } from './hooks/useSEO';
import XonaiWebsite from './components/ui/component';
import Documentation from './components/Documentation';

function SEORoutes() {
  useSEO(); // Initialize SEO for all routes
  
  return (
    <Routes>
      <Route path="/" element={<XonaiWebsite />} />
      <Route path="/documentation" element={<Documentation />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <div style={{ width: '100%', minHeight: '100vh', margin: 0, padding: 0 }}>
        <SEORoutes />
      </div>
    </Router>
  );
}

export default App;