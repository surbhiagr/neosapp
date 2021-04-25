import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const searchicon = <FontAwesomeIcon icon={faSearch} />
const carticon = <FontAwesomeIcon icon={faShoppingCart} />

function Navbar(props){
    var availableuser = 0
//     let search = function(event){
//         availableuser++
// //        alert(availableuser)
//         event.preventDefault()
//        console.log(availableuser)
//     }
var [searcha,setSearch] = useState({})
let searchquery =(event)=>{
  setSearch(event.target.value)
  console.log(event.target.value)
 
}
var logout = (event)=>{
  event.preventDefault()
  props.dispatch({
    type : "LOGOUT"
})
}
    return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to = '/'><a class="navbar-brand" href="#">Cake Shop</a></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  {/* Hello {props.user} */}
  
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li className = "nav-item">
      {props.user && <a className = "nav-link" tabIndex = "-1" aria-disabled= "true">Howdy {props.user} </a>}
      </li>
      <li class="nav-item dropdown">
        
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" onChange = {searchquery} placeholder="Search" aria-label="Search"></input>
      <Link to={`/search?q=${searcha}`}><button  class="btn btn-outline-success my-2 my-sm-0" type="submit">{searchicon}</button></Link>
      <Link to = '/cart'><button  class="btn btn-outline-success my-2 my-sm-0" type="submit">{carticon}</button></Link>
      {/* { props.user &&<button  class = "btn btn-danger">Logout</button>} */}
      {props.loginstatus ?<div>
      <button onClick = {logout} class = "btn btn-danger">Logout</button>
      {/* <button  class = "btn btn-danger">Logout</button> */}
      </div>:<div> 
      <Link to = '/login'><button class = "btn btn-primary">Login</button></Link>
      </div> }
    </form>
  </div>
</nav>
            
    )
}
export default connect(function(state,props){
console.log("Initial state navbar", state)
return{
  // user: state && state["users"]["name"],
  // loginstatus: state && state["isloggedin"]
  //OR
  user : state?.users?.name,   //(if inside state users is there , if inside user name is there)
  loginstatus: state?.isloggedin
}
})(Navbar) 