import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <ToastContainer />
        </div>
    );
};

export default MainLayout;