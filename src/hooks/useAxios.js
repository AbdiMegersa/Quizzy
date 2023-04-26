import axios from "axios"
import { useEffect , useState } from "react"

const UseAxios = ({url}) => {

    const [response, setResponse] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)


    axios.defaults.baseURL = "https://opentdb.com/"

    useEffect( () => {
        const fetchData = () => {
            axios
                .get(url)
                .then(res => setResponse(res.data))
                .catch(e => setError(e))
                .finally( () => setLoading(false))
        }
        fetchData();
    }, [url])


    return { response, error, loading}
}

export default UseAxios;
