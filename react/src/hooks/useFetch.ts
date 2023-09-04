import axios from '../api/axios'
import useAuth from './useAuth'

type useFetchProps = {
    url : string,
    isJWT : boolean
}

const useFetch = ({url, isJWT }  : useFetchProps) => {
    const { auth } = useAuth();
    const fetchData = async () => {
        let requestHeader;
        console.log(auth.accessToken)
        if(isJWT) {
            requestHeader = {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${auth.accessToken}`
            }
        }
        else {
            requestHeader = {
                'Content-Type' : 'application/json'
            }
        }
        console.log(auth.accessToken);
        try {
        const response = await axios.get(url,
            { 
                headers : {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${auth.accessToken}`
                }
            }
        )
        return response.data;
        } catch(err : any) {
            //create error 
        }
    }
    return fetchData;
}

export default useFetch