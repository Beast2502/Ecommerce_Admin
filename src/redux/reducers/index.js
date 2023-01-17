import { combineReducers } from "redux";

import commentsReducer from './commentsReducer';
import bannerReducer from './bannersReducer';

export default combineReducers({
    comments : commentsReducer,
    banners : bannerReducer
});