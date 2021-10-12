import { all, fork, select, takeEvery } from 'redux-saga/effects';
import AdminProfileSaga from '../components/main/adminSection/profile/redux/sagas';
import AuthSagas from '../components/comman/primaryActions/redux/sagas';

function* watchAndLog() {
    yield takeEvery('*', function* logger(action) {
        const state = yield select();
        // console.debug('action', action);
        // console.debug('state after', state);
    });
}

export default function* root() {
    yield all([
        fork(watchAndLog),
        fork(AdminProfileSaga),
        fork(AuthSagas),
    ]);
}
