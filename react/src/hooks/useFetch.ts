import axios from '../api/axios'
import useAuth from './useAuth'

type useFetchProps = {
    url : string,
    isJWT : boolean
    data? : object
}

const useFetch = ({url, isJWT, data }  : useFetchProps) => {
    const { auth } = useAuth();
    
    const fetchData = async () => {
        const requestHeader = jwtChecker();
        try {
        const response = await axios.get(url,
            { 
                headers : requestHeader
            }
        )
        return response.data;
        } catch(err : any) {
            console.log("ERROR")
        }

    }

    const postData = async () => {
        const requestHeader = jwtChecker();
        try {
            const response = await axios.post(url,
                data,
                {
                    headers : requestHeader
                }
            ).then(response => {
                return response.data
            })
        } catch(err : any) {
            console.log("error")
        }
        
    }

    const jwtChecker = () => {
        if(isJWT) {
            return {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${auth.accessToken}`
            }
        }
        else {
            return {
                'Content-Type' : 'application/json'
            }
        }
    }
    return { fetchData, postData } ;
}

export default useFetch