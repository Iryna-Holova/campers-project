import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Loader from './Loader/Loader';
import Footer from './Footer/Footer';

const SharedLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div id="top" style={{ position: 'absolute', top: 0 }}></div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Suspense>
  );
};

export default SharedLayout;
