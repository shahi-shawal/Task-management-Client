
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";


const Action = () => {
    const {user} = useContext(AuthContext)
    const [alltask, setTask] = useState([])

     useEffect(()=>{
        fetch(`https://task-server-navy-ten.vercel.app/task/${user.email}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setTask(data)
    })
     },[])

    const handelUpdate=(item)=>{
        console.log(item);

    }

    const handelDelete=(_id)=>{
        console.log(_id);
    
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result)=>{
          if(result.isConfirmed){
            fetch(`https://task-server-navy-ten.vercel.app/task/${_id}`, {
              method: "DELETE",
            })
      
      .then((res) => res.json())
       
      .then((data) => {
          if (data.deletedCount > 0) {
            
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
           
          });
          const remaing = alltask.filter((jobdelete)=> jobdelete._id !==_id)
          setTask(remaing)
        }
       
      });
          }
        })
    
       
    
      }
    return (
        <div className="text-black">
        <div className="flex  justify-evenly mb-10">
        <h1 className="card-title ">Total Task : {alltask.length}</h1>
        </div>
        <div className="overflow-x-auto">
<table className="table ">
{/* head */}
<thead className="bg-gray-400">
  <tr>
  <th>#</th>
    <th>Title</th>
    <th>Priority</th>
    <th>Dedline</th>
    <th>Description</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>

  {
    alltask.map((item,index)=><tr key={item._id}>
        <td>
            {index+1}
        </td>
    <td>
      <div className="flex items-center gap-3">
      {item.title}
      </div>
    </td>
    <td><div>
          <div className="font-bold">{item.priority}</div>
        </div></td>
        <td><div>

        <div className="font-bold">{item.deadline}</div>
        </div></td>
        <td><div>
        <div className="font-bold">{item.description}</div>
        </div></td>
    <th className="flex gap-4">
      <Link to={`updatetask/${item._id}`}><button onClick={()=>handelUpdate(item)} className="btn btn-ghost text-white bg-green-500 btn-sm">
        <FaEdit />
      </button></Link>
      <button onClick={()=>handelDelete(item._id)} className="btn btn-ghost text-white bg-red-500 btn-sm">
        <FaTrashAlt />
      </button>
    </th>
  </tr>)
  }
  </tbody>

</table>
</div>
    </div>
    );
};

export default Action;