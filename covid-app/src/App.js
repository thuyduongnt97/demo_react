import React from 'react';
import './App.css';

// function App() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [datas, setDatas] = useState([]);
//   useEffect(() => {
//     fetch("https://gw.vnexpress.net/cr/?name=world_coronavirus")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setDatas(result.data);
//         },

//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//   }, [])
//   let listData = datas.data;
//   console.log(listData);
  
//   if (error) {
//     return <div className="App">Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div className="App">Loading...</div>;
//   } else {
//     return (
//       <div className="App">
//           <p>ID : {datas._id}</p>
//           <p>Create: {datas.created_at}</p>
//           <p>Name{datas.name}</p>
//           <p>Update{datas.updated_at}</p>

//         <ul>
//           {/* {listData.map(a => console.log(a))} */}
//         </ul>
//       </div>
//     );
//   }
//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   //   </div>
//   // );
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://gw.vnexpress.net/cr/?name=world_coronavirus")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <p> {items.data[0].chart.total_cases.data.map(a => console.log(a))} </p>
         <ul>
          {/* {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))} */}
        </ul>
        </div>
       
      );
    }
  }
}
export default App;
