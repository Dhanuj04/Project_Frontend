import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import AvailablePolicy from './components/UserDashboardComponents/AvailablePolicy'
import PolicyCategory from './components/UserDashboardComponents/PolicyCategory'
import Feedback from './components/UserDashboardComponents/Feedback';
import AppliedPolicy from './components/UserDashboardComponents/AppliedPolicy';
import ApplyPolicy from './components/UserDashboardComponents/ApplyPolicy';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/policy-available" element={<AvailablePolicy />} />
        <Route path="/policy-categories" element={<PolicyCategory />} />
        <Route path="/policy-applied" element={<AppliedPolicy />} />
        <Route path="/policy-apply" element={<ApplyPolicy />} />
        <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
