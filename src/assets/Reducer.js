import React, {useReducer} from 'react';

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
let testReducer
function Reducer(props) {

    testReducer = useReducer(userReducer, [])
    return (
        <div></div>
    );
}

export default Reducer;
