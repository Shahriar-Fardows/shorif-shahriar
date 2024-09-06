import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";

const Root = () => {
    return (
        <div >
            <div className="relative pb-24 px-10 z-10">
                <Navbar />
            </div>
            <div className="min-h-screen  bg-white z-50 ">
                        <Outlet />
                    </div>
                <div className="z-10">
                    <Footer />
                </div>
        </div>
    );
};

export default Root;