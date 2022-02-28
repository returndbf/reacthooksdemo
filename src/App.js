import './App.css';
import router from "./router";
import {useReducer, useContext, createContext, useEffect, useState} from "react";
import {useNavigate, useRoutes} from "react-router-dom";
import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined} from '@ant-design/icons';
import {userReducer} from "./reducer/Reducer";

export const UserContext = createContext({})
const App = (props) => {
    const element = useRoutes(router)
    const navigate = useNavigate()
    const [users, dispatch] = useReducer(userReducer, [])
    const [key,setKey] = useState("home")
    return (
        <UserContext.Provider value={{users, dispatch,key,setKey}}>
            <div className="App">
                <div>
                    <Menu mode="horizontal" selectedKeys={key}>
                        <Menu.Item key="home" icon={<MailOutlined/>} onClick={toIndex}>
                            Home
                        </Menu.Item>
                        <Menu.Item key="users"   icon={<AppstoreOutlined/>} onClick={toUsers}>
                            Users
                        </Menu.Item>
                        <Menu.Item key="create" onClick={toCreate}>
                            Create
                        </Menu.Item>
                    </Menu>
                </div>
                {element}

            </div>
        </UserContext.Provider>
    );

    function toIndex(...args) {
        setKey("home")
        navigate("home")
    }

     function toUsers() {
         setKey("users")
        navigate("users")
    }

    function toCreate() {
        setKey("create")
        navigate("create")
    }
}

export default App;

