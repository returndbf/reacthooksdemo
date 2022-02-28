import React,{createContext} from "react";
import Home from "./Home";
import Create from "./Create";
import Users from "./Users";

export const UserContext = createContext(2)



function Context(props) {
    return (
        <UserContext.Provider value={1}>
            <Home></Home>
            <Create></Create>
            <Users></Users>
        </UserContext.Provider>
    );
}

export default Context;