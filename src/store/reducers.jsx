import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import AdminProfileReducer from '../components/main/adminSection/profile/redux/reducer';
import userAuthReducer from '../components/comman/primaryActions/redux/reducer';

const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        adminProfile: AdminProfileReducer,
        auth: userAuthReducer,
    });

export default createRootReducer;