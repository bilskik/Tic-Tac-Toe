import { createContext, useState, ReactNode } from 'react'

type AuthStateType = {
    auth : AuthState
    setAuth : (auth : AuthState) => void
    getAuth : () => void
    setDestroyAuth : () => void
}
interface AuthProviderProps {
    children : ReactNode
}

interface AuthState {
    username : string
    password? : string
    roles? : string
    accessToken : string
    isLoggedByGoogle? : boolean | null,
    isRefreshed? : boolean
}

const AuthContext = createContext<AuthStateType>({
    auth : {
        username : '',
        password : '',
        roles : '',
        accessToken : '',
        isLoggedByGoogle : null,
        isRefreshed : false
    },
    setAuth: (auth : AuthState) => undefined,
    setDestroyAuth : () => undefined,
    getAuth : () => undefined
});

export const AuthProvider = ({ children } : AuthProviderProps) => {
    const emptyAuth = {
        username : '',
        password : '',
        roles : '',
        accessToken : '',
        isLoggedByGoogle : null,
        isRefreshed : false
    }
    const [auth,setDataAuth] = useState<AuthState>(emptyAuth)

    const setAuth = (authorization : AuthState) => {
        setDataAuth(authorization);
        localStorage.setItem("jwt",authorization.accessToken);
        localStorage.setItem("username", authorization.username);
    }
    const getAuth = async () => {
        if(auth.accessToken === "") {
            const storedUsername= localStorage.getItem("username");
            const storedToken = localStorage.getItem("jwt");
            if(storedUsername != null && storedToken != null) {
                const updatedAuth : AuthState = {
                    username : storedUsername,
                    accessToken : storedToken,
                    isRefreshed : !auth.isRefreshed
                }
                setDataAuth(updatedAuth);
            }
        }
    }
    const setDestroyAuth = () => {
            const updatedAuth = {...emptyAuth, isRefreshed : auth.isRefreshed}
            setDataAuth(updatedAuth);
            localStorage.setItem("jwt", "");
            localStorage.setItem("username", "");

    }
    return (
        <AuthContext.Provider value={{ auth, setAuth, getAuth, setDestroyAuth }}>
            { children }
        </AuthContext.Provider>
    )
}
export default AuthContext;
