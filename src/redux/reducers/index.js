import { combineReducers } from "redux";

import commentsReducer from './commentsReducer';
import bannerReducer from './bannersReducer';
import productReducer from "./productsReducer";
import categoryReducer from "./categoriesReducer";
import authReducer from "./authReducer";

export default combineReducers({
    comments : commentsReducer,
    banners : bannerReducer,
    categories : categoryReducer,
    products : productReducer,
    isActive : authReducer
});