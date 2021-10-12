import { handleActions } from "redux-actions";
import {types} from './actions';
const actionHandler = {
    [types.USER_SIGNUP_REQ]: state => ({
        ...state,
        signUpLoader: true,
    }),
    [types.USER_SIGNUP_FAILED]: state => ({
        ...state,
        signUpLoader: false,
    }),
    [types.USER_SIGNUP_SUCCESS]: state => ({
        ...state,
        signUpLoader: false,
    }),
    
    [types.USER_SIGNIN_REQ]: state => ({
        ...state,
        signInLoader: true,
    }),
    [types.USER_SIGNIN_FAILED]: state => ({
        ...state,
        signInLoader: false,
    }),
    [types.USER_SIGNIN_SUCCESS]: state => ({
        ...state,
        signInLoader: false,
    }),
}

export default handleActions(actionHandler, {
    signUpLoader: false,
    signInLoader: false,
})