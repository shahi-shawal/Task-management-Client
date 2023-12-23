import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Deshboard from "../layout/Deshboard";
import Everything from "../Pages/Home/Dashboard/Everything";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateRoutes from "./PrivateRoutes";


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
        }
    ]
   }
]
}])

export default routes;