import { handleActions } from "redux-actions";
import { types } from "./actions";

const actionsHandler = {
    [types.ADD_ADMIN_PROFILE_INFO_REQ]: state => ({
        ...state,
        loader: true,
    }),
    [types.ADD_ADMIN_PROFILE_INFO_FAILED]: (state, {payload}) => ({
        ...state,
        loader: false,
    }),
    [types.ADD_ADMIN_PROFILE_INFO_SUCCESS]: state => ({
        ...state,
        loader: false,
    }),
}

export default handleActions(actionsHandler, {
    loader: false,
})