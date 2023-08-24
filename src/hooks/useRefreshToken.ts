import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get("/refresh", {
            withCredentials: true
        })
        const updatedAccessToken = response.data.accessToken;
        setAuth({
            ...auth,
            accessToken : updatedAccessToken
        })
        return updatedAccessToken;
    }
    return refresh;
}