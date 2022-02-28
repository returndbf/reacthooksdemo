import Home from "../assets/Home"
import Users from "../assets/Users";
import Create from "../assets/Create";
export default[
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/users",
        element: <Users/>
    },
    {
        path:"/create",
        element:<Create></Create>
    },
    {
        path:"*",
        element: <Home></Home>
    }
]