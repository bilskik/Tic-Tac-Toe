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
        if(isJWT) {
            requestHeader = {
                'ContentType' : 'application/json',
                'Authorization' : `Bearer ${auth.accessToken}`
            }
        }
        else {
            requestHeader = {
                'ContentType' : 'application/json'
            }
        }
        try {
        const response = await axios.get(url,
            { 
                headers : requestHeader
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