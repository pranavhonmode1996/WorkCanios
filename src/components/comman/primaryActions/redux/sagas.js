import { call, takeLatest } from "redux-saga/effects";
import { types } from "./actions";
import { toast } from "react-toastify";
import { userSignup } from "../../../../api";

const userSignupReq = function* userSignupReq({ payload }) {
    try {
        const { reqData } = payload;
        const data = yield call(userSignup, reqData);
    if (data?.status === 200) {
      toast.success(data?.data.message);
    } else {
      toast.error("Something went wrong while uploading details.");
    }
  } catch (error) {
      console.log(error);
  }
};

export default function* sagas() {
  yield takeLatest(types.USER_SIGNUP_REQ, userSignupReq);
}
