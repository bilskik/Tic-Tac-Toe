import { createContext, useState, ReactNode } from 'react'

type AuthStateType = {
    auth : AuthState;
    setAuth : React.Dispatch<React.SetStateAction<AuthState>>
}

interface AuthProviderProps {
    children : ReactNode
}

interface AuthState {
    username? : string
    password? : string
    roles? : string
    accessToken : string
    isLoggedByGoogle? : boolean | null
}

const AuthContext = createContext<AuthStateType>({
    auth : {
        username : '',
        password : '',
        roles : '',
        accessToken : '',
        isLoggedByGoogle : null
    },
    setAuth: () => undefined
});

export const AuthProvider = ({ children } : AuthProviderProps) => {
    const [auth,setAuth] = useState<AuthState>({
        username : '',
        password : '',
        roles : '',
        accessToken : '',
        isLoggedByGoogle : null
    })
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            { children }
        </AuthContext.Provider>
    )
}
export default AuthContext;
