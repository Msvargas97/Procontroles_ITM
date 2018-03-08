import { FETCH_LOGIN, UPDATE_ACCOUNT, FETCH_STATUS, LOGOUT } from "../actions/actionTypes";

const accountReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_ACCOUNT:
            return {
                ...state,
                data: action.data
            }
        case FETCH_STATUS:
            return {
                ...state,
                isFetching: action.isFetching,
                request : action.request
            }
        case LOGOUT:
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}

export default accountReducer;