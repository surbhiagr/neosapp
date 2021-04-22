import Cake from './Cake';
// import cakes from './data.js';
import CakeDetails from './CakeDetails';
import axios from "axios"
import Carousel from './Carousel';

import {useState,useEffect} from "react"


var obj = {
    name: "Choco delight",
    image: "cake.jpeg",
    price: 1000
}

function Home(){
    
   let [cakes, setCakes] = useState([])
   let allcakesapi = "https://apibyashu.herokuapp.com/api/allcakes"
   
   useEffect(()=> {
       axios({
           method : "get",
           url : allcakesapi
       }).then((response)=>{console.log("response data  all cake api",response.data)
       setCakes(response.data.data)
    },
      
       (error)=>{console.log("error all cake api",error)})
   },[])
    
    
    var [show,setShow]=useState(false)
    var [com,setCom]=useState({});
    let showDetails=(data)=>{
    setShow(true)
    setCom(data)
    }
    return(
        
            <div style = {{border: "1px solid"}}>
                <Carousel/>
                <div className = "row">
                 {show?<CakeDetails  cdata={com}/>:''}
                        {cakes?.length>0 && cakes.map((each,index)=>{
                            return(<Cake cakedata ={each} key ={index} showdetails={showDetails} cakedata={each}/>)
                        })}
                       
      
          </div>
            </div>
            )
}

export default Home