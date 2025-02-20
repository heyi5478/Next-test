import Navbar from './Navbar';
import Footer from './Footer';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="content">
      <Navbar />
      { children }
      <Footer/>
    </div>
  );
}

export default Layout;