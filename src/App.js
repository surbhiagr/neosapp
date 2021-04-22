import logo from './logo.svg';
import {useState} from "react"

import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Signup from './Signup';
import Login from './Login';
import Search from './Search';

import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import CakeDetails from './CakeDetails';

function App() {
    var [user,setUser] = useState()
    var [loginstatus, setloginstatus] = useState(false)
    function LoginDone(data){
        setUser(data)
         setloginstatus(true)
//        alert("Logged in parent")
    }
    
  return (
    <div class="container">     
      <Router>
      <Navbar loginstatus = {loginstatus}  user = {user}/>
      
        <div>
          <Switch>
          <Route path = "/" exact component = {Home}/>
          {/* <Route path = "/login" exact ><Login /></Route>  */}
          <Route path = "/login" exact ><Login informlogin = {LoginDone}/></Route> 
          <Route path = "/signup" exact component = {Signup}/>
          <Route path = "/search" exact component = {Search}/>
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
export default App;
