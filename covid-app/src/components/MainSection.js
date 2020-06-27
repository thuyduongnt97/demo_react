import WorldTotal from './WorldTotal'
import AreaTotal from './AreaTotal'

import React, { useState, useEffect ,Component} from 'react';
 
class MainSection extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            data: [],
            isLoading: false,
            isError: false,
            table_world: [],
            table_country: []
        };
      }
    componentDidMount() {
        this.setState({ isLoading: true });
     
        fetch("https://gw.vnexpress.net/cr/?name=world_coronavirus")
          .then(response => response.json())
          .then(data => this.setState({ data: data.data.data[0], 
            isLoading: false,
            data_total : data.data.data[0].table_world,
            table_country: data.data.data[0].table_country
         }))
          .catch(error => this.setState({ error, isLoading: false }));
    }
    render(){
        const {data, isError, isLoading, table_world, table_country} = this.state
        return (

            <>  

                {/* {data.table_world !== undefined ? console.log(data.table_world.total_cases) : "dsdfdsf"} */}

                {isError && <div>Something went wrong ...</div>}
                {isLoading ? (
                    <div>Loading ...</div>
                ) : (
                    <div>
                        <WorldTotal table_world = {table_world} isLoading = {isLoading} />
                        <AreaTotal table_country = {table_country} isLoading = {isLoading} />
                    </div>
                    
                
                    
                )}
            </>
          
        );
    }
}


// const MainSection = () => {
//     const [data, setData] = useState({ dataCovid: [] });
//     const [url, setUrl] = useState(
//         'https://gw.vnexpress.net/cr/?name=world_coronavirus',
//     );
//     const [isLoading, setIsLoading] = useState(false);
//     const [isError, setIsError] = useState(false);
    
//     useEffect(() => {
//         const fetchData = async () => {
//             setIsError(false);
//             setIsLoading(true);
            
//             try {
//                 const result = await axios(url);
//                 setData(result.data.data.data[0]);
//             } catch (error) {
//                 setIsError(true);
//             }
//             setIsLoading(false);
//         };
        
//         fetchData();
//     }, [url]);
   
//     return (

//         <>
//             {isError && <div>Something went wrong ...</div>}
//             {isLoading ? (
//                 <div>Loading ...</div>
//             ) : (
//                 <div>
//                     {console.log(isLoading)} 
//                     <WorldTotal table_world = {data.table_world} isLoading = {isLoading} />
//                 </div>
                
            
                
//             )}
//         </>
      
//     );
// }

export default MainSection


