import { Outlet } from "react-router-dom";
import Deshnavbar from "../Components/Shared/Navbar/Deshnavbar";

const Deshboard = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row">
            <div>
            <Deshnavbar></Deshnavbar>
            </div>
            <div className="w-full  text-white lg:pl-[340px]">
            <Outlet></Outlet>
            </div>
            </div>
        </div>
    );
};

export default Deshboard;