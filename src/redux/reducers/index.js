import { combineReducers } from "redux";

import commentsReducer from './commentsReducer';
import bannerReducer from './bannersReducer';
import categoryReducer from "./categoriesReducer";

export default combineReducers({
    comments : commentsReducer,
    banners : bannerReducer,
    categories : categoryReducer
});