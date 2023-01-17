import { ADD_BANNER } from "../actions/types";

const banners = (state=[] ,action) =>{
    switch(action.type){
        case ADD_BANNER:
            return [...state, action.payload]
        default:
            return state;
    }
}

export default banners;