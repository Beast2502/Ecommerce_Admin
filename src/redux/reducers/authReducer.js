import {USER_LOGGEDIN ,USER_LOGOUT} from '../actions/types';

const authReducer = (state=false ,action) =>{
    switch(action.type){
        case USER_LOGGEDIN :
            return action.payload;
        case USER_LOGOUT :
            return action.payload;
        default:
            return state;
    }
}

export default authReducer;