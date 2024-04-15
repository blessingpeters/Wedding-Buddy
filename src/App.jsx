import { Routes, Route } from 'react-router-dom';
import {Layout, AuthLayout, DashboardLayout} from './components/layouts/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VendorsPage from './pages/VendorsPage';
import VendorListingsPage from './pages/VendorListingsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Services from './pages/Services';
import VendorLogin from './pages/auth/VendorLogin';
import CoupleLogin from './pages/auth/CoupleLogin';
import VendorSignup from './pages/auth/VendorSignUp';
import CoupleSignup from './pages/auth/CoupleSignUp';
import CoupleDashboard from './pages/your/CoupleDashboard';
import VendorDashboard from './pages/your/CoupleDashboard';
import VendorDetailPage from './pages/VendorDetailPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<Services />} />
          <Route path="vendors" element={<VendorsPage />} />
          <Route path="vendors/:vendorListings" element={<VendorListingsPage />} />
          <Route path="vendors/:vendorListings/:vendorId" element={<VendorDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="/" element={<AuthLayout />}>
          <Route path="vendorLogin" element={<VendorLogin />} />
          <Route path="coupleLogin" element={<CoupleLogin />} />
          <Route path="vendorSignup" element={<VendorSignup/>} />
          <Route path="coupleSignup" element={<CoupleSignup/>} />
        </Route>
        <Route path="/your" element={<DashboardLayout />}>
          <Route index element={<CoupleDashboard />} />
          <Route path="vendor" element={<VendorDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
