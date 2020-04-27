import React from 'react'
import {TouchableOpacity} from 'react-native'
import { useDispatch } from 'react-redux'
import { logoutHandler } from '../store/actions/authentication';
function LogoutScreen() {

    const dispatch = useDispatch();

    const createLogoutHandler = () => {
      dispatch(logoutHandler());
    }

    return (
        <TouchableOpacity onPress={createLogoutHandler()}/>
    )
}

export default LogoutScreen
