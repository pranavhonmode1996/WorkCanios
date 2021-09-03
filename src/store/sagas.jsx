import { all, fork, select, takeEvery } from 'redux-saga/effects';

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
    ]);
}
