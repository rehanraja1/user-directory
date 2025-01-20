import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import UserDetail from './UserDetail';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
