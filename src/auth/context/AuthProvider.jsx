import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? {logged: true, user} : {logged: false};
}
export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (name = '') => {
        const user = {id: 'ABC', name}
        const action = {
            type: types.login,
            payload: user
        }
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action)
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = {type: types.logout};
        dispatch(action)
    }
  return (
     <AuthContext.Provider value={{login,logout, ...authState}}>
         {children}
     </AuthContext.Provider>
  )
}
