import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Outlet is for our nested routes, that will show up in place of the Outlet component, depending on our route
const SharedLayout = () => {
  return (
    <div className='container'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default SharedLayout;
