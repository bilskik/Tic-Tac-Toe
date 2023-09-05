import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { useRefreshToken } from "./useRefreshToken";

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth