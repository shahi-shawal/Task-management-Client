import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const Todo = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const {data: todo=[], refetch} = useQuery({
       queryKey:["todo"],
       queryFn:async()=>{
        const res = await axiosPublic.get(`/task/${user.email}`)
        return res.data
       }

    })
   
    console.log(todo);
                
    
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