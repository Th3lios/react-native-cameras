export const LOGIN_AUTHENTICATION = 'LOGIN_AUTHENTICATION';

export const loginAuthentication = (email, password) => {
    return {type: 'LOGIN_AUTHENTICATION', payload:{email: email, password: password} }
}