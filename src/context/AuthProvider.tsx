import { createContext, useState, ReactNode } from 'react'

type AuthStateType = {
    auth : AuthState;
    setAuth : React.Dispatch<React.SetStateAction<AuthState>>
}
const AuthContext = createContext<AuthStateType>({
    auth : {
        username : '',
        password : '',
        roles : '',
        accessToken : ''
    },
    setAuth: () => undefined
});

interface AuthProviderProps {
    children : ReactNode
}

interface AuthState {
    username : string
    password : string
    roles : string
    accessToken : string
}
export const AuthProvider = ({ children } : AuthProviderProps) => {
    const [auth,setAuth] = useState<AuthState>({
        username : '',
        password : '',
        roles : '',
        accessToken : ''
    })
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            { children }
        </AuthContext.Provider>
    )
}
export default AuthContext;
