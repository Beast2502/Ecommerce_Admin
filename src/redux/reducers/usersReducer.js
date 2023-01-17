import { ADD_USER } from "../actions/types";


const users = (state=[],action)=>{
    switch(action.type){
        case ADD_USER:
            return [...state,action.payload]
        default:
            return [...state,action.payload]
    }
}

export default users;