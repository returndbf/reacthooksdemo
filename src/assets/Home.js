import React, {useEffect,useContext} from 'react';
import {UserContext} from "../App";

function Home(props) {
    const {users,dispatch} = useContext(UserContext)
    useEffect(()=>{
        console.log(users,dispatch);
    })

    return (
        <div>
            <h1>This is Home Page</h1>

        </div>
    );
}

export default Home;