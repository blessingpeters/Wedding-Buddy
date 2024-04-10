import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import AuthLayout from './components/layouts/Layout';
import DashboardLayout from './components/layouts/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import Services from './pages/Services';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Login';
import CoupleDashboard from './pages/your/CoupleDashboard';
import VendorDashboard from './pages/your/CoupleDashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup/>} />
        </Route>
        <Route path="/buyer" element={<DashboardLayout />}>
          <Route index element={<CoupleDashboard/>} />
          <Route index element={<VendorDashboard/>} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
