import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Components/Shared/Navbar/Navbar";

const Register = () => {

    const navigate = useNavigate()
    const {createUser}= useContext(AuthContext)



   const handelSignUp=e=>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const image = form.image.value
    const email = form.email.value
    const password = form.password.value

    const signUpdata= {name, image, email, password}
    console.log(signUpdata);

    if (password.length < 6) {
        return toast.error("Password should be at least 6 characters");
      } else if (!/[A-Z]/.test(password) || !/[.!@#$%^&*()_+-=]/.test(password)) {
         return toast.error("Password should contain at least one uppercase letter and one special character");
      } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        return  toast.error("Please check your email and provide a valid email address");
      }



     createUser(email, password)
    .then(result=>{
        console.log(result.user);
        toast.success("Successfully register")
        updateProfile(result.user,{
          displayName: name,
          photoURL:image
        })
        .then()
        .catch()
       
        navigate("/")
        return
    })
    .catch(error=>{
        console.error(error);
        toast.error("Check your email and password")
         return 
    })
    form.reset()
   }



    return (
        <div>
      <div
      >
        <Navbar></Navbar>
       
      </div>
      <div className="hero">
        <div className=" flex-col">
          <div className="card flex-shrink-0 w-full max-w-xl bg-base-100">
            <h1 className="text-center font-bold text-2xl text-[#801DDB] mt-2 mb-4">Create your Account</h1>
            <form onSubmit={handelSignUp} className="w-96 p-5">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Photo URL"
                  className="input input-bordered"
                  name="image"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
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
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#801DDB] text-white hover:text-[#801DDB]">Sign up</button>
              </div>
            </form>
            <div>
                <h1 className="text-xl font-bold text-center mb-10">Already Have an Account? <Link to="/login"> <span className="text-[#801DDB]">Login</span></Link></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;