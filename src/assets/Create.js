import React,{useContext,useRef} from 'react';
import {Button, Input} from 'antd';
import {UserContext} from "../App";

function Create(props) {
    const {users,dispatch} = useContext(UserContext)
    const input1 = useRef()
    const input2 = useRef()
    function addUser(){
        dispatch({
            type:"CREATE_USER",
            user:{
                id:input1.current.input.value,
                name:input2.current.input.value
            }
        })
        console.log(input1.current.input.value)
        console.log(input2.current.input.value)
    }

    return (
        <div>
            <Input ref={input1} size={"large"} placeholder={"输入id"}></Input>
            <Input ref={input2} size={"large"} placeholder={"输入name"}></Input>
            <Button onClick={()=>addUser()}>添加</Button>
        </div>
    );
}

export default Create;