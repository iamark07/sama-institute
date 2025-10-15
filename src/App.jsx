import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import OrganizationRegistration from './pages/organization/organization-pages/OrganizationRegistration';

// Layout
import StudentLayout from './pages/dashboard/dashboard_data/StudentLayout';

// Organization Layout
import OrganizationLayout from './pages/organization/OrganizationLayout';

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

        {/* StudentLayout wraps all pages under the student dashboard */}
        <Route element={<StudentLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* OrganizationLayout wraps all pages under the organization*/}
        <Route element={<OrganizationLayout />}>
          <Route path="/org-registration" element={<OrganizationRegistration />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
