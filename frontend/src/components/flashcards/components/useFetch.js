import {useState, useEffect} from 'react';

const useFetchData = (url)  => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            
        }).then(res => res.json())
        .then((msg) => setData(msg))


    }, [url])

    return [data];
}

export default useFetchData;
