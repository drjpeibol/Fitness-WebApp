import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Analytics from './pages/Analytics';
import Utilities from './pages/Utilities';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/utilities" element={<Utilities />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App; 