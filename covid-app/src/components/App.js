import React  from 'react';
//import components
import Header from './Header';
import Main from '../containers/Main'
const App = () => {
  return(
    <section className="ant-layout">
      <Header/>
      <Main />
    </section>
  )
}


export default App;
