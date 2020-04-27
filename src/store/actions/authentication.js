export const LOGIN_AUTHENTICATION = 'LOGIN_AUTHENTICATION';
export const LOG_OUT = 'LOG_OUT';

export const loginAuthentication = (email, password) => {
    return {type: 'LOGIN_AUTHENTICATION', payload:{email: email, password: password} }
}

export const logoutHandler = () => {
    return {type: 'LOG_OUT'}
}