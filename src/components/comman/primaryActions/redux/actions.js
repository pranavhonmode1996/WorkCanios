import { createAction } from "redux-actions";

const USER_SIGNIN_REQ = "WC/USER_SIGNIN_REQ";
const USER_SIGNIN_SUCCESS = "WC/USER_SIGNIN_SUCCESS";
const USER_SIGNIN_FAILED = "WC/USER_SIGNIN_FAILED";

const USER_SIGNUP_REQ = "WC/USER_SIGNUP_REQ";
const USER_SIGNUP_SUCCESS = "WC/USER_SIGNUP_SUCCESS";
const USER_SIGNUP_FAILED = "WC/USER_SIGNUP_FAILED";

const userSigninReq = createAction(USER_SIGNIN_REQ);
const userSigninSuccess = createAction(USER_SIGNIN_SUCCESS);
const userSigninFailed = createAction(USER_SIGNIN_FAILED);

const userSignupReq = createAction(USER_SIGNUP_REQ);
const userSignupSuccess = createAction(USER_SIGNUP_SUCCESS);
const userSignupFailed = createAction(USER_SIGNUP_FAILED);

export const types = {
    USER_SIGNIN_REQ,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAILED, 

    USER_SIGNUP_REQ,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILED, 
}

export const actions = {
    userSigninReq,
    userSigninSuccess,
    userSigninFailed,

    userSignupReq,
    userSignupSuccess,
    userSignupFailed,
}