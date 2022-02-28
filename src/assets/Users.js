import React, {useContext, useState} from 'react';
import {UserContext} from "../App";
import {Button, Divider, List, Modal} from "antd";

function Users(props) {
    const {users, dispatch} = useContext(UserContext)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [currentUser, changeCurrentUser] = useState({})

    function deleteUser(id) {
        dispatch({
            type: "DELETE_USER",
            id
        })
    }

    function viewUser(id) {
        setIsModalVisible(true)
        changeCurrentUser(users.find(item => {
            return item.id = id
        }))

    }

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <List
                size="large"
                header={<div>UserList</div>}
                bordered
                dataSource={users}
                renderItem={item =>
                    <List.Item actions={[<Button key="view" onClick={() => viewUser(item.id)}>view</Button>,
                        <Button key="delete" onClick={() => deleteUser(item.id)}>delete</Button>]}>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                    </List.Item>
                }

            />
            <Modal title="userInfo" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>userId：{currentUser.id}</p>
                <p>userName：{currentUser.name}</p>
            </Modal>
        </div>
    );
}

export default Users;