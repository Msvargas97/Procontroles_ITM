import { AppNavigator } from '../navigator'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Main'));

const navReducer = (state = initialState, action) => {
    if (action.type.startsWith('Navigation/')) {
        const { type, routeName } = action
        const lastRoute = state.routes[state.routes.length - 1]
        if (type == lastRoute.type && routeName == lastRoute.routeName) return state
    }
    return AppNavigator.router.getStateForAction(action, state)
};

export default navReducer;