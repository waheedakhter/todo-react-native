import { 
    GET_TODOS_LIST, TODO_SAVED, TODO_DELETED, TODO_COMPLETED
} from '../actions/types';

const INITIAL_STATE = { todosList: []}

export default (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case GET_TODOS_LIST:
        case TODO_SAVED:
        case TODO_DELETED:
        case TODO_COMPLETED:
            return { ...state,todosList:action.payload }
        default:
            return state;
    }
}