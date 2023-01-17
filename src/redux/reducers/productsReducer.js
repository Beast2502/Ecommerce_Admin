import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../actions/types";

const products =(state=[],action) =>{
    switch(action.type){
        case ADD_PRODUCT :
            return [...state,action.payload];
        case DELETE_PRODUCT:
            return [...state,action.payload];
        case UPDATE_PRODUCT:
            return [...state,action.payload];
        default:
            return state;
    }
}

export default products;