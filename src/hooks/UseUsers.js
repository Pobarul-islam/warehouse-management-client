import React, { useEffect, useState } from 'react'

const useUsers = (url) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return users;
}

export default useUsers