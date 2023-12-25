import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
const Createtask = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit } = useForm()
    const onSubmit = async(data) => {
        const tasked = {
            title: data.title,
            useremail: data.useremail,
            priority: data.priority,
            deadline: data.deadline,
            description: data.description
        }
    console.log(tasked);

     const taskitem = await axiosPublic.post("/task", tasked)
     console.log(taskitem.data);
     if (taskitem.data.insertedId) {
        toast.success("Task Add successfully")
     }


    }
    return (
        <div className="text-black">
              <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-5">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              {...register("title")}
              type="text"
              placeholder="Title"
              required
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Priority</span>
              </label>
              <select
                {...register("priority")}
                className="select select-bordered w-full "
              >
                <option disabled >
                  Select a priority
                </option>
                <option value="high">High</option>
                <option value="modarate">Moderate</option>
                <option value="low">Low</option>
              </select>
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                {...register("deadline")}
                type="Date"
                placeholder=""
                required
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <input hidden
                {...register("useremail")}
                defaultValue={user.email}
                type="text"
                placeholder=""
                required
              />
          <div className="form-control my-6">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
            {...register("description")}
              className="textarea textarea-bordered h-24"
              placeholder="Description"
            ></textarea>
          </div>
          <button className="btn btn-outline hover:bg-blue-800" >Add Task </button>
        </form>
      </div>
        </div>
    );
};

export default Createtask;