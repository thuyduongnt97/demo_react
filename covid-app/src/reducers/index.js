import axios from "axios";

let defaultState={
  data: loadData
}
const loadData = () =>{
  return(dispatch)=>{
      return axios.get("https://gw.vnexpress.net/cr/?name=world_coronavirus").then((response)=>{
          dispatch(response.data);
      })
  }
}
const mainReducer = (state = defaultState)=>{
  return{
      ...state
  }
}

export default mainReducer;