import { Routes, Route } from 'react-router-dom';
import {Layout, AuthLayout} from './components/layouts/Layout';
import { DashboardLayout } from './components/layouts/DashboardLayout';
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
import CoupleDashboard from './pages/coupleDashboard/Dashboard';
import VendorDashboard from './pages/vendorDashboard/Dashboard';
import VendorDetailPage from './pages/VendorDetailPage';
import Budget from './pages/coupleDashboard/Budget';
import SubVendors from './pages/vendorDashboard/SubVendors';
import VendorServices from './pages/vendorDashboard/VendorServices';
import Bookings from './pages/vendorDashboard/Bookings';
import Portfolio from './pages/vendorDashboard/Portfolio';
import Reviews from './pages/vendorDashboard/Reviews';
import Clients from './pages/vendorDashboard/Clients';
import GuessList from './pages/coupleDashboard/GuessList';
import Tips from './pages/coupleDashboard/Tips';
import CheckList from './pages/coupleDashboard/CheckList';
import BookedVendors from './pages/coupleDashboard/BookedVendors';
import VendorProfile from './pages/vendorDashboard/VendorProfile';
import CoupleProfile from './pages/coupleDashboard/CoupleProfile';
import Notification from './components/Notification';

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

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="vendorLogin" element={<VendorLogin />} />
          <Route path="coupleLogin" element={<CoupleLogin />} />
          <Route path="vendorSignup" element={<VendorSignup/>} />
          <Route path="coupleSignup" element={<CoupleSignup/>} />
        </Route>
        <Route path="/couple-dashboard" element={<DashboardLayout userType="couple" />}>
          <Route index element={<CoupleDashboard />} />
          <Route path="budget" element={<Budget />} />
          <Route path="guestlist" element={<GuessList />} />
          <Route path="tips" element={<Tips />} />
          <Route path="checklist" element={<CheckList/>} />
          <Route path="vendors" element={<BookedVendors />} />
          <Route path="notifications" element={<Notification/>} />
          <Route path="profile" element={<CoupleProfile/>} />
        </Route>

        <Route path="/vendor-dashboard" element={<DashboardLayout userType="vendor" />}>
          <Route index element={<VendorDashboard />} />
          <Route path="clients" element={<Clients/>} />
          <Route path="subvendors" element={<SubVendors />} />
          <Route path="services" element={<VendorServices />} />
          <Route path="booking" element={<Bookings />} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="reviews" element={<Reviews/>} />
          <Route path="notifications" element={<Notification/>} />
          <Route path="profile" element={<VendorProfile/>} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
