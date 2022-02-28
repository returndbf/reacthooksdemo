import {useReducer} from "react";

export const userReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_USER":
                return [...state, action.user]
        case "DELETE_USER":
            return state.filter(item => {
                return item.id !== action.id
            })

    }
}
