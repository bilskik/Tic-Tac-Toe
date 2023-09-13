import { createContext, useState, ReactNode } from 'react'

type AuthStateType = {
    auth : AuthState
    setAuth : (auth : AuthState) => void
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
    setDestroyAuth : () => undefined
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

    const setAuth = (auth : AuthState) => {
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
        } else {
            setDataAuth(auth);
            localStorage.setItem("jwt",auth.accessToken);
            localStorage.setItem("username", auth.username);
        }
    }
    const setDestroyAuth = () => {
            const updatedAuth = {...emptyAuth, isRefreshed : auth.isRefreshed}
            setDataAuth(updatedAuth);
            localStorage.setItem("jwt", "");
            localStorage.setItem("username", "");

    }
    return (
        <AuthContext.Provider value={{ auth, setAuth, setDestroyAuth }}>
            { children }
        </AuthContext.Provider>
    )
}
export default AuthContext;
