import { useEffect, useState } from "react";

const useBikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('bikes.json')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);
    return [bikes, setBikes];
};

export default useBikes;
