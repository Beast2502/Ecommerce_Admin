import { combineReducers } from "redux";

import commentsReducer from './commentsReducer';
import bannerReducer from './bannersReducer';
import categoryReducer from "./categoriesReducer";
import authReducer from "./authReducer";

export default combineReducers({
    comments : commentsReducer,
    banners : bannerReducer,
    categories : categoryReducer,
    isActive : authReducer
});