import Cake from './Cake';
// import cakes from './data.js';
import CakeDetails from './CakeDetails';
import Card from './Card';
import axios from "axios"
import {useState,useEffect} from "react"

function Search(){

  let [cakesresult, setCakes] = useState([])
  let searchcakeapi = "https://apibyashu.herokuapp.com/api/searchcakes?q="+"mango"
   
   useEffect(()=> {
       axios({
           method : "get",
           url : searchcakeapi
       }).then((response)=>{console.log("response data  search cake api",response.data)
       setCakes(response.data.data)
    },
      
       (error)=>{console.log("error all cake api",error)})
   },[])
 
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