import banner from "../../assets/Images/Banner-2.png"
import Navbar from "../Shared/Navbar/Navbar";
import im1 from "../../assets/Images/Accept tasks-amico.png"
const Banner = () => {
    return (
        <div style={{
            backgroundImage:`url(${banner})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:'100%',
            
        }}
        className=""
        >
            <Navbar></Navbar>
            <div  className="flex flex-col-reverse lg:flex-row lg:justify-around items-center">
                <div className=" flex flex-col gap-3 lg:px-20">
                    <h1 className="font-bold text-2xl lg:text-6xl">Get more done <br></br>with Clickit tasks.</h1>
                    <p className="">Plan, organize, and collaborate on any project with <br></br>task management that can be customized for every need.</p>
                    <div className="flex flex-col gap-3">
                    <input type="text" placeholder="Enter Your Work Email" className="input input-bordered input-primary w-96 lg:w-full max-w-xs" />
                    <button className="btn btn-primary text-clip lg:text-xl w-20 lg:w-40 mb-4">Let’s Explore</button>
                    </div>
                </div>
                <div className="flex-1">
                        <img src={im1} alt="" className="w-[300px] lg:w-[500px] "/>
                    </div>
            </div>
        </div>
    );
};

export default Banner;