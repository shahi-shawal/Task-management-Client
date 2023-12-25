import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Deshboard from "../layout/Deshboard";
import Everything from "../Pages/Home/Dashboard/Everything";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateRoutes from "./PrivateRoutes";
import Createtask from "../Pages/Home/Dashboard/CreateTask/Createtask";
import Action from "../Pages/Home/Dashboard/Tasklist/Action";
import EditTask from "../Pages/Home/Dashboard/Tasklist/EditTask";


const routes = createBrowserRouter([{
    path:"/",
    element:<Mainlayout></Mainlayout>,
    children:[{
        path:"/",
        element:<Home></Home>
    },
    {
     path:"/login",
     element:<Login></Login>
    },
    {
     path:"/register",
     element:<Register></Register>
    },
   {
    path:"/deshboard",
    element:<PrivateRoutes><Deshboard></Deshboard></PrivateRoutes>,
    children:[
        {
            path:"everything",
            element:<Everything></Everything>
        },
        {
            path:"createtask",
            element:<Createtask></Createtask>
        },
        {
            path:"everything/action",
            element:<Action></Action>,
         
        },
        {
            path:"everything/action/updatetask/:id",
            element:<EditTask></EditTask>,
            loader:({params})=>fetch(`https://task-server-navy-ten.vercel.app/task/${params.id}`)
         
        }
    ]
   }
]
}])

export default routes;