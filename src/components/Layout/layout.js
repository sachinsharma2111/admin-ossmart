import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

const SidebarLayout = () => (
  <>
    <Header />
    <Menu/>
    <Outlet />
    <Footer/>
  </>
);

export default SidebarLayout;
