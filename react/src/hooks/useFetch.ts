import axios from '../api/axios'

const useFetch = ( url : string) => {
    let data = {};
    const fetchData = async () => {
    try {
        const response = await axios.get(url,
            { 
                headers : { 'Content-Type' : 'application/json'}
            }
        )
        console.log("I am in useFetch")
        console.log(response.data)
        return response.data;
        } catch(err : any) {
            //create error 
        }
    }
    return fetchData;
}

export default useFetch