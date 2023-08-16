import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation';



const Layout = () => {
    return (
        <>
        <Navigation/>    
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    );
}

export default Layout;
