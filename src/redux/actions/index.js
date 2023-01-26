import { ADD_PRODUCT, ADD_BANNER, SAVE_COMMENT, ADD_CATEGORY, USER_LOGGEDIN ,USER_LOGOUT} from "./types";

export const authUser = (details) => {
  console.log(details);

  return {
    type: USER_LOGGEDIN,
    payload: true,
  };
};

export const logOutUser = () =>{
    return {
        type : USER_LOGOUT,
        payload : false
    }
}

export const addBanner = (banner) => {
  return {
    type: ADD_BANNER,
    payload: banner,
  };
};

export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    payload: category,
  };
};

export const addProduct =(product) =>{
  return {
    type : ADD_PRODUCT,
    payload : product
  }
};

export function saveComment(comment) {
  console.log(comment, "Action");
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}
