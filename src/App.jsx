import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// auth Pages
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Register from './pages/Register';

// Layout
import Home from './pages/Home';
import OrganizationRegistration from './pages/organization/organization-pages/OrganizationRegistration';
import DashboardLayout from './pages/dashboard/DashboardLayout';

// Organization Layout
import OrganizationLayout from './pages/organization/OrganizationLayout';

// Pages
import Profile from './pages/dashboard/dashboard_pages/Profile';
import AddStaff from './pages/dashboard/brands/brands-pages/brands-dashboard-pages/AddStaff';
import AddBrands from './pages/dashboard/admin/admin_pages/admin-dashboard-pages/AddBrands';


function App() {
  return (
    <Router>
      <Routes>
        {/* auth pages */}
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* auth pages end */}

        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />

        {/* DashboardLayout wraps all pages under the dashboard */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<div />} /> {/* This will be handled by the layout */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/staff/add" element={<AddStaff />} />
          <Route path="/brands/add" element={<AddBrands />} />
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
