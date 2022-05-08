import { useEffect, useState } from "react";

const useBikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('https://secure-atoll-72404.herokuapp.com/inventory/')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);
    return [bikes, setBikes];
};

export default useBikes;
