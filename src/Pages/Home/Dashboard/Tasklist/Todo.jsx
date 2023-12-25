import { useQuery } from "@tanstack/react-query";
import { MdDelete, MdEdit } from "react-icons/md";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Todo = () => {
    const axiosPublic = useAxiosPublic()
    const {data: todo=[], refetch} = useQuery({
       queryKey:["todo"],
       queryFn:async()=>{
        const res = await axiosPublic.get("/task")
        return res.data
       }

    })
    console.log(todo);

    // const handelDelete=(id)=>{
    //     console.log(id);
    //     Swal.fire({
    //       title: "Are you sure?",
    //       text: "You won't be able to revert this!",
    //       icon: "warning",
    //       showCancelButton: true,
    //       confirmButtonColor: "#3085d6",
    //       cancelButtonColor: "#d33",
    //       confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //       if (result.isConfirmed) {
          
    //       axiosPublic.delete(`/task/${id}`)
    //       .then(res=> {
    //           console.log(res.data);
    //           if (res.data.deletedCount > 0) {
    //               refetch()
    //               Swal.fire({
    //           title: "Deleted!",
    //           text: "Your file has been deleted.",
    //           icon: "success"
    //         });  
            
    //           }
    //       })
    //       }
    //     });
    //     }
    
                
    
    return (
        <div>
            <div className="border rounded-md p-4">
                <h1 className="w-40 mb-2 font-bold text-xl mx-auto text-center border rounded-md bg-blue-400">Todo</h1>
               <div>
               {
                todo.map((me)=><div key={me.key}>
                    <div className=" border rounded-xl border-gray-300 w-96 p-4 mb-4">
                    <h1 className="font-bold">{me.title}</h1>
                    <h1 className="">{me.description}</h1>
                    <div className="flex gap-3">
                        <h1>Deadline: {me.deadline}</h1>
                        <h1>Priority: <span className="font-bold">{me.priority}</span></h1>
                        
                    </div>
                    <div className="text-end flex gap-4 justify-end">
                       <Link to="action"> <button className="border px-2 rounded-xl border-black">Action</button></Link>
                        </div>
                    </div>
                </div>)
               }
               </div>
            </div>
        </div>
    );
};

export default Todo;