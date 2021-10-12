import { call, takeLatest } from "redux-saga/effects";
import { types } from "./actions";
import { addAdminProfileDetails } from "../../../../../api/index";
import { toast } from "react-toastify";

const addAdminProfileInfoReq = function* addAdminProfileInfoReq({ payload }) {
  try {
    const { reqData } = payload;
    const data = yield call(addAdminProfileDetails, reqData);
    if (data?.status === 200) {
      toast.success(data?.data.message);
    } else {
      toast.error("Something went wrong while uploading details.");
    }
  } catch (error) {}
};

export default function* sagas() {
  yield takeLatest(types.ADD_ADMIN_PROFILE_INFO_REQ, addAdminProfileInfoReq);
}
