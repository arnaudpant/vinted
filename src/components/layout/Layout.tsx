import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="pt-28">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
