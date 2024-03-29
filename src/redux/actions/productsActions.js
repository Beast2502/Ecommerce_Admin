import { ADD_PRODUCT ,UPDATE_PRODUCT ,DELETE_PRODUCT} from "./types";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const updateProduct = (id ,product) => {
  return {
    type: UPDATE_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (id) =>{
    return {
        type: DELETE_PRODUCT,
        payload : id
    }
}
