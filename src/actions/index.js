import { FETCH_LOGIN, UPDATE_ACCOUNT, FETCH_STATUS, INIT_APP, LOGOUT, FETCH_REGISTER } from "./actionTypes";

export const initAction = () => ({
    type: INIT_APP
})

export const logoutAction = () => ({
    type: LOGOUT,
    data: { login: false }
})

//###################### ACTIONS SETTING,LOGIN AND REGISTER ##########################
export const fetchLoginAction = (payload) => {
    return {
        type: FETCH_LOGIN,
        payload
    }
}

export const fetchRegisterAction = (payload) => ({
    type: FETCH_REGISTER,
    payload
})

export const updateAccountAction = (data) => ({
    type: UPDATE_ACCOUNT,
    data
})

export const fetchStatusWithApiAction = (isFetching, error, message) => ({
    type: FETCH_STATUS,
    isFetching, //isFetching : isFetching
    request
})