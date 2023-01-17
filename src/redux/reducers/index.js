import { combineReducers } from "redux";

import commentsReducer from './comments';
import bannerReducer from './banners';

export default combineReducers({
    comments : commentsReducer,
    banners : bannerReducer
});