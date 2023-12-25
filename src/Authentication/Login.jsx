import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { useContext } from "react";
import { toast } from "react-hot-toast"; 
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Components/Shared/Navbar/Navbar";

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
   const {login, googlelogin} = useContext(AuthContext)

  const handelLogin=e=>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    const logindata= { email, password}
    console.log(logindata);


    if (password.length < 6) {
        return toast.error("Password should be at least 6 characters");
      } else if (!/[A-Z]/.test(password) || !/[.!@#$%^&*()_+-=]/.test(password)) {
         return toast.error("Password should contain at least one uppercase letter and one special character");
      } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        return  toast.error("Please check your email and provide a valid email address");
      }

    login(email,password)
    .then(result=>{
        console.log(result.user);
        navigate(location?.state? location.state :"/deshboard/everything")
         toast.success("Log in successfully")
         return
    })
    .catch(error=>{
        console.error(error);
        toast.error("Check your Email and Password")
        return
    })
    form.reset()
  }

  const handelGooglelog=()=>{
    googlelogin()
    navigate(location?.state? location.state :"/deshboard/everything")
    toast.success("Log in successfully")
    return
   }
  return (
    <div>
      <Navbar></Navbar>  
      <div className="hero">
        <div className=" flex-col border border-gray-400 shadow-2xl rounded-xl p-2">
          <div className="card flex-shrink-0 w-full max-w-xl bg-base-100">
            <form onSubmit={handelLogin} className="w-96 p-5">
                <div className="text-center">
                <p className="mb-4">You Dont have an Account?</p>
                <Link to="/register"><button className="btn bg-base-200 text-blue-800 hover:bg-blue-800 hover:text-white mb-6">Create Your Account</button></Link>
                </div>
                <hr></hr>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-800 text-white hover:text-blue-800">Login</button>
              </div>
            </form>
            <button onClick={handelGooglelog} className="btn text-white text-xl bg-[#DE4302] hover:bg-[#DE4302] hover:text-white mb-10"><AiOutlineGoogle />Google+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;