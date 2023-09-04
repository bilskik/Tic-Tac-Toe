import { createContext, useState, ReactNode } from 'react'

type AuthStateType = {
    auth : AuthState;
    setAuth : (auth : AuthState) => void
}

interface AuthProviderProps {
    children : ReactNode
}

interface AuthState {
    username : string
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
    setAuth: (auth : AuthState) => {

    }
});

export const AuthProvider = ({ children } : AuthProviderProps) => {
    const [auth,setDataAuth] = useState<AuthState>({
        username : '',
        password : '',
        roles : '',
        accessToken : '',
        isLoggedByGoogle : null
    })
    const setAuth = (auth : AuthState) => {
        if(auth.accessToken === "") {
            const storedUsername= localStorage.getItem("username");
            const storedToken = localStorage.getItem("jwt");
            if(storedUsername != null && storedToken != null) {
                const updatedAuth : AuthState = {
                    username : storedUsername,
                    accessToken : storedToken
                }
                setDataAuth(updatedAuth);
            }
        } else {
            setDataAuth(auth);
            localStorage.setItem("jwt",auth.accessToken);
            localStorage.setItem("username", auth.username);
        }

    }
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            { children }
        </AuthContext.Provider>
    )
}
export default AuthContext;
