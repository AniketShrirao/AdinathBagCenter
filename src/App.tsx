// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
// import DashboardPage from './pages/DashboardPage';
// import BagTrackingPage from './pages/BagTrackingPage';
// import CustomerManagementPage from './pages/CustomerManagementPage';
// import CMSIntegrationPage from './pages/CMSIntegrationPage';
// import QRCodePaymentPage from './pages/QRCodePaymentPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/bag-tracking" element={<BagTrackingPage />} />
          <Route path="/customer-management" element={<CustomerManagementPage />} />
          <Route path="/cms-integration" element={<CMSIntegrationPage />} />
          <Route path="/qr-code-payment" element={<QRCodePaymentPage />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
