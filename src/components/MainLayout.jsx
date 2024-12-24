import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';

const MainLayout = () => {

    
    
    return (
        <div className="">
            <Navbar></Navbar>
            
                <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;