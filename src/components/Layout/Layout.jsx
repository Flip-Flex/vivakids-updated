import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import FixedFooter from './FixedFooter';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Navbar />
            <main className="flex-grow pt-[80px]"> {/* Increased padding for header */}
                <Outlet />
            </main>
            <FixedFooter />
        </div>
    );
};

export default Layout;
