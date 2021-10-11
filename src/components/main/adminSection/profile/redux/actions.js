import { createAction } from "redux-actions";
const ADD_ADMIN_PROFILE_INFO_REQ = "WC/ADD_ADMIN_PROFILE_INFO_REQ";
const ADD_ADMIN_PROFILE_INFO_SUCCESS = "WC/ADD_ADMIN_PROFILE_INFO_SUCCESS";
const ADD_ADMIN_PROFILE_INFO_FAILED = "WC/ADD_ADMIN_PROFILE_INFO_FAILED";

const addAdminProfileInfoReq = createAction(ADD_ADMIN_PROFILE_INFO_REQ);
const addAdminProfileInfoSuccess = createAction(ADD_ADMIN_PROFILE_INFO_SUCCESS);
const addAdminProfileInfoFailed = createAction(ADD_ADMIN_PROFILE_INFO_FAILED);

export const types = {
  ADD_ADMIN_PROFILE_INFO_REQ,
  ADD_ADMIN_PROFILE_INFO_SUCCESS,
  ADD_ADMIN_PROFILE_INFO_FAILED,
};

export const actions = {
  addAdminProfileInfoReq,
  addAdminProfileInfoSuccess,
  addAdminProfileInfoFailed,
};
