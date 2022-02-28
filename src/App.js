import './App.css';
import router from "./router";
import {useReducer, useContext,createContext,useEffect} from "react";
import {useNavigate, useRoutes} from "react-router-dom";
import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined} from '@ant-design/icons';

export const UserContext = createContext({})
const App=(props)=> {
    const element = useRoutes(router)
    const navigate = useNavigate()
    const userReducer = (state, action) => {
        switch (action.type) {
            case "CREATE_USER":
                return [...state, action.user]
            case "DELETE_USER":
                return state.filter(item => {
                    return item.id !== action.id
                })

        }
    }
    const [users, dispatch] = useReducer(userReducer, [])
    return (
        <UserContext.Provider value={{users,dispatch}}>
        <div className="App">
            <div>
                <Menu mode="horizontal">
                    <Menu.Item key="home" icon={<MailOutlined/>} onClick={toIndex}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="users" icon={<AppstoreOutlined/>} onClick={toUsers}>
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

    function toIndex() {
        navigate("home")
    }

    function toUsers() {
        navigate("users")
    }

    function toCreate() {
        navigate("create")
    }
}


export default App;

