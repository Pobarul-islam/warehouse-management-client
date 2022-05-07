import { useEffect, useState } from "react";

const useServices = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return [service, setService];

}

export default useServices;