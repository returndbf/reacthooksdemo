import Home from "../component/Home"
import Users from "../component/Users";
import Create from "../component/Create";
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