import logo from './logo.svg';
import {useState} from "react"

import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Signup from './Signup';
import Login from './Login';
import Search from './Search';
import Cart from './Cart';


import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import CakeDetails from './CakeDetails';
import axios  from "axios"
import { connect } from 'react-redux';
import Checkout from './Checkout';




function App(props) {


  if(localStorage.token && !props.user){
    var token = localStorage.token
    console.log("User is already logged innn",localStorage.token)
    axios({
      method:'get',
      url:"https://apibyashu.herokuapp.com/api/getuserdetails",
      headers:{
        authtoken:token
      }
    }).then((response)=>{
      console.log("Response from user detail api", response)
      props.dispatch({
        type : "INITUSER",
        payload : response.data.data
    })
    },(error)=>{
      console.log("Error from user detail api",error)
    })
  }

  
//     var [user,setUser] = useState()
//     var [loginstatus, setloginstatus] = useState(false)
//     function LoginDone(data){
//         setUser(data)
//          setloginstatus(true)
// //        alert("Logged in parent")
//     }
    
  return (
    <div class="container">     
      <Router>
      {/* <Navbar loginstatus = {loginstatus}  user = {user}/> through props */}
      <Navbar/>
        <div>
          <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/login"  exact component = {Login}/>
          {/* <Route path = "/login" exact ><Login informlogin = {LoginDone}/></Route> through props  */}
          <Route path = "/signup" exact component = {Signup}/>
          <Route path = "/search" exact component = {Search}/>
          <Route path = "/cart" exact component = {Cart}/>
          <Route path = "/checkout"  component = {Checkout}/>
          <Route path = "/cake/:cakeid" exact component = {CakeDetails}/>
 
          {/* <Route path = "/*" exact component = {Pagenotfound}/> */}
          <Route path = "/*">
            <Redirect to = "/"></Redirect>
          </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default connect(function(state,props){
  return{
    user: state?.users
  }
})(App);
