import { ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from "./types"

export const addCategory =(category)=>{
    return{
        type : ADD_CATEGORY,
        payload : category
    }
}

export const updateCategory = (category) =>{
    return {
        type : UPDATE_CATEGORY,
        payload : category
    }
}

export const deleteCategory  = (id) =>{
    return {
        type : DELETE_CATEGORY,
        payload : id
    }
}