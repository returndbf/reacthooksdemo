import React, {useContext, useRef} from 'react';
import {message, Button, Input} from 'antd';
import {UserContext} from "../App";
import {useNavigate} from "react-router-dom";

function Create(props) {
    const {users, dispatch,key,setKey} = useContext(UserContext)
    const input1 = useRef()
    const input2 = useRef()
    const navigate = useNavigate()
    function addUser() {
        let user = users.find(item => {
            return item.id == input1.current.input.value
        })
        if (user) {
            message.error('用户id重复');
            return
        }else{
            dispatch({
                type: "CREATE_USER",
                user: {
                    id:input1.current.input.value,
                    name:input2.current.input.value
                }
            })
            message.info('创建成功');
            setKey("users")
           navigate("/users")
            console.log(key)


            console.log(users)
        }


    }

    return (
        <div>
            <Input ref={input1} size={"large"} placeholder={"输入id"}></Input>
            <Input ref={input2} size={"large"} placeholder={"输入name"}></Input>
            <Button onClick={() => addUser()}>添加</Button>
        </div>
    );
}

export default Create;