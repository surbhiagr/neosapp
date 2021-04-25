import Cake from './Cake';
// import cakes from './data.js';
import CakeDetails from './CakeDetails';
import Card from './Card';
import axios from "axios"
import {useState,useEffect} from "react"
import { useParams } from 'react-router'
import queryString from 'query-string'

function Search(props){
    const searchstring = queryString.parse(props.location.search)
    console.log("Search String",searchstring)

  let [cakesresult, setCakes] = useState([]) 
//   let search = useParams()
//   console.log('Search param',props.location.search);

   useEffect(()=> {
       axios({
           method : "get",
        //    url : "https://apibyashu.herokuapp.com/api/searchcakes"+props.location.search,
        url : "https://apibyashu.herokuapp.com/api/searchcakes?q="+searchstring.q,
       }).then((response)=>{console.log("response data  search cake api",response.data)
       setCakes(response.data.data)
    },
      
       (error)=>{console.log("error all cake api",error)})
   },[,props.location.search])
 
    return(
<div className = "container">
  <div className = "row">
        {cakesresult?.length>0 ? cakesresult.map((each,index)=>{
            return(<Cake cakedata ={each} key ={index}/>)
        }): <div className = "alert alert-danger">No Result Found. Try Other Cake</div>}
                       
      
  </div>
</div>
            
    )
}
export default Search