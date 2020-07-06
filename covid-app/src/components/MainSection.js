import WorldTotal from './WorldTotal'
import AreaTotal from './AreaTotal'
import Nation from './Nation'

import React, { useState, useEffect ,Component} from 'react';
 
class MainSection extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
            isLoading: false,
            isError: false,
            table_world: [],
            table_area: [],
            table_nation: []
        };
      }
    componentDidMount() {
        this.setState({ isLoading: true });
        let listArea = [ "Bắc Mỹ", "Châu Âu", "Châu Á", "Nam Mỹ", "Châu Phi"]
        fetch("https://gw.vnexpress.net/cr/?name=world_coronavirus")
          .then(response => response.json())
          .then(data => {
            let listDataArea = data.data.data[0].table_country.filter(area => listArea.includes(area.country))
            let listDataNation = data.data.data[0].table_country.filter(area => !listArea.includes(area.country))
            this.setState({ data: data.data.data[0], 
                isLoading: false,
                table_world : data.data.data[0].table_world,
                table_area: listDataArea,
                table_nation: listDataNation
             })}
           )
          .catch(error => this.setState({ error, isLoading: false }));
    }
    render(){
        const {data, isError, isLoading, table_world, table_area, table_nation} = this.state
        return (
            <>  
                {/* {console.log(table_nation)} */}
                {/* {data.table_world !== undefined ? console.log(data.table_world.total_cases) : "dsdfdsf"} */}

                {isError && <div>Something went wrong ...</div>}
                {isLoading ? (
                    <div>Loading ...</div>
                ) : (
                    <div>
                        <WorldTotal table_world = {table_world} />
                        <AreaTotal table_area = {table_area}  />
                        <Nation table_nation = {table_nation}/>
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


