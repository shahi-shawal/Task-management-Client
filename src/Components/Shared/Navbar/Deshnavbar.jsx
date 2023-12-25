import { NavLink, useNavigate } from "react-router-dom";
import { IoBackspaceOutline,  IoCreateOutline, IoHomeOutline, IoStopOutline } from "react-icons/io5";
import { PiGraph } from "react-icons/pi";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
const Deshnavbar = () => {
  const {user,logout} = useContext(AuthContext)
  const navigate = useNavigate()
  const handellogOut=()=>{
    logout()
    toast.success("Log Out successfully")
    navigate("/")
  }
    return (
        <div className="text-black">
             <div>
      <div className="flex  lg:fixed">
        <div className="lg:w-80 lg:min-h-screen px-2 bg-gray-100">
          <img src="" className=" mb-5 mt-5 mx-auto" alt="" />
          <div className="flex justify-center items-center gap-5">
            <div>
            <h1>{user?.displayName}</h1>
            <h1>{user?.email}</h1>
            </div>
            <div>
              <img src={user?.photoURL} className="border rounded-full border-blue-800 w-16" alt="" />
            </div>
          </div>
          <div className="text-start px-4">
            <ul className="menu flex flex-col gap-4 font-semibold menu-horizontal mt-6 gap-1">
              <li className="">
                <NavLink to="/" className="flex items-center gap-2">
                  <IoHomeOutline size={26} className="text-black" /> Home
                </NavLink>
                </li>
              <li className="">
                <NavLink to="everything" className="flex items-center gap-2">
                  <PiGraph size={26} className="text-black" /> Everything
                </NavLink>
                </li>
              <li className="">
                <NavLink to="createtask" className="flex items-center gap-2">
                  <IoCreateOutline size={26} className="text-black" />Create Task
                </NavLink>
                </li>
              <li className="">
                <NavLink to="previoustask" className="flex items-center gap-2">
                  <IoBackspaceOutline size={26} className="text-black" />Previous Task
                </NavLink>
                </li>

                <hr></hr>

                <li className="">
                  <button className="flex items-center gap-2" onClick={()=>handellogOut()} ><IoStopOutline size={26} className="text-black" />Logout</button>
          
                </li>


              </ul>
          </div>

  
        </div>
      </div>
    </div>
        </div>
    );
};

export default Deshnavbar;