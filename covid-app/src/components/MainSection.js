import WorldTotal from './WorldTotal'
import axios from 'axios'

import React, { useState, useEffect } from 'react';
 
const MainSection = () => {
    const [data, setData] = useState({ dataCovid: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://gw.vnexpress.net/cr/?name=world_coronavirus',
            );
            setData(result.data.data.data[0])
        };
        fetchData();
    }, []);

    return (
        <>
                    
            {console.log(data)}
            {/* <WorldTotal data_total = {data.data_total} /> */}
        </>
    );
}

export default MainSection


