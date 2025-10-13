import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import SchoolRegistration from './pages/SchoolRegistration';

// Layout
import StudentLayout from './pages/dashboard/dashboard_data/StudentLayout';

// Pages
import Dashboard from './pages/dashboard/dashboard_data/dashboard_pages/Dashboard';
import Profile from './pages/dashboard/dashboard_data/dashboard_pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/school-registration" element={<SchoolRegistration />} />

        {/* StudentLayout wraps both dashboard and profile */}
        <Route element={<StudentLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
