import { FETCH_STATUS, FETCH_LOGIN, UPDATE_ACCOUNT, INIT_APP, FETCH_REGISTER } from "../actions/actionTypes";
//import { errorMessage, message } from '../components/SnackbarMessage';
//Saga effects
import { put, takeLatest, delay, call } from 'redux-saga/effects';
import { Api } from './Api';
import * as db from './db';
import { FieldArray, reduxForm, Form, reset } from 'redux-form';

function* init() {
    try {
        const account = yield db.init();
        yield put({ type: UPDATE_ACCOUNT, data: (account) ? account : undefined });
    } catch (error) {
        alert(error + " init[0]")
    }
}
export function* watchInitDatabase() {
    yield takeLatest(INIT_APP, init)
}

//###############################################
function* fetchLogin(action) {
    try {
        //yield put({ type: FETCH_STATUS, isFetching: true, request: 'login' });
        let result = yield Api.requestLoginFromApi(action.payload);
        if (result.error === false) yield db.updateAccount({ ...result.payload, login: true })
        yield put({ type: UPDATE_ACCOUNT, data: (result.error === false) ? { ...result.payload, login: !result.error } : { ...result.payload, login: !result.error } });
       // yield put({ type: FETCH_STATUS, isFetching: false, request: 'login' });
        //  yield call(reset,REGISTER_FORM)
        // alert(`Result fetch:${JSON.stringify(result,null,2)}`)
      /*   if (result.error) errorMessage(result.payload.username + result.payload.password)
        else message(result.message) */
    } catch (error) {
        //   yield call(reset, REGISTER_FORM)
       // yield put({ type: FETCH_STATUS, isFetching: false, request: 'login' });
        alert(error)
        //errorMessage(error)
    }
}

export function* watchFetchLogin() {
    yield takeLatest(FETCH_LOGIN, fetchLogin);
}
function* fetchRegister(action) {
    try {
        yield put({ type: FETCH_STATUS, isFetching: true, request: 'register' });
        const result = yield Api.requestRegisterFromApi({ ...action.payload, user_type: 'technician' });
        yield put({ type: FETCH_STATUS, isFetching: false, request: 'register' });
        yield put(reset(REGISTER_FORM))
        //alert(`Result fetch:${JSON.stringify(result, null, 2)}`)
        /* if (result.error) errorMessage(result.message)
        else alert(result.message) */
    } catch (error) {
        yield put(reset(REGISTER_FORM))
        yield put({ type: FETCH_STATUS, isFetching: false, request: 'register' });
       // errorMessage(error)
    }
}

export function* watchFetchRegister() {
    yield takeLatest(FETCH_REGISTER, fetchRegister);
}


