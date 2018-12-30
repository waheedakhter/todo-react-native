import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer'
import todosList from './feedReducer'

export default combineReducers({
    auth: AuthReducer,
    todosList:todosList
});