import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const DashboardLayout = () => (
  <>
    <Outlet />
    <Footer />
  </>
);

export default DashboardLayout;