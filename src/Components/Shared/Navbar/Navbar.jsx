import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const {user,logout} = useContext(AuthContext)
  const navigate = useNavigate()
  const handellogOut=()=>{
    logout()
    toast.success("Log Out successfully")
    navigate("/")
  }
    const navlinks=
        <>
        <NavLink to="/"><li><a>Home</a></li></NavLink>
        <li><a>Learn</a></li>
        <li><a> Soliution</a></li>
      <NavLink to="/deshboard/everything" ><li><a>Deshboard</a></li></NavLink>
       </>
    return (
        <div>
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
        
      </ul>
    </div>
    <a className="font-bold text-2xl ">CLICK<span className="text-[#801DDB]">it</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navlinks}
      </ul>
      
  </div>
  <div className="navbar-end px-6">
  {
  user? <>
   <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      <img  src={user?.photoURL? user.photoURL : "None"} />
    </div>
  </label>
  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gray-500 rounded-box w-52 text-white font-bold">
    <li>
      <a className="justify-between">
        {
          user?.displayName? user.displayName :"Your Name"
        }
      </a>
    </li>
    <li><a>Settings</a></li>
    <li onClick={handellogOut} ><a>Logout</a></li>
  </ul>
</div>
</>
      :
      <Link to="/login">
    <Link to="/login"> <button className="btn bg-gray-200 ">Login</button></Link>
    </Link>
    }
      </div>
    
    </div>
  </div>

    );
};

export default Navbar;