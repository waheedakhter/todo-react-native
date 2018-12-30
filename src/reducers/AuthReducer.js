import { 
    IS_LOGGED_IN
} from '../actions/types';

const INITIAL_STATE = { name: ""}

export default (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case IS_LOGGED_IN:
            return { ...state,loginSuccess:false }
        default:
            return state;
    }
}