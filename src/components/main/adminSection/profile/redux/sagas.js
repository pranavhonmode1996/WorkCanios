import { call, takeLatest } from "redux-saga/effects";
import { types } from "./actions";
import {addAdminProfileDetails} from '../../../../../api/index';

const addAdminProfileInfoReq = function* addAdminProfileInfoReq({ payload }) {
  try {
      const data = yield call(addAdminProfileDetails, payload);
      console.log(data)
  } catch (error) {}
};

export default function* sagas() {
  yield takeLatest(types.ADD_ADMIN_PROFILE_INFO_REQ, addAdminProfileInfoReq);
}
