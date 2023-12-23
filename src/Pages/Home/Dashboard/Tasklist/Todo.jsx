import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Todo = () => {
    const [todo, setTodo]= useState([])
    useEffect(()=>{
        fetch("/task.json")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setTodo(data)
        })
    },[])
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
                    </div>
                </div>)
               }
               </div>
            </div>
        </div>
    );
};

export default Todo;