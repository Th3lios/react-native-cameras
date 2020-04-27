import {USERS} from '../../data/dummyData';
import { LOGIN_AUTHENTICATION, LOG_OUT } from '../actions/authentication';
import {Alert} from 'react-native'
const initialState = {
    users: USERS,
    auth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_AUTHENTICATION:
            const existingUser = state.users.findIndex(user => user.email === action.payload.email && user.password === action.payload.password)
            if (existingUser >= 0) {
                return {
                    ...state,
                    auth: true
                }
            }else{
                Alert.alert("Esta cuenta no existe")
                return(
                    state
                )
            }
        case LOG_OUT:
            return {
                ...state,
                auth: false
            }
        default:
            return state
    }
}

export default authReducer;