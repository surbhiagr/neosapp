import {useState} from "react"
import axios from "axios"
import { Link, withRouter } from "react-router-dom"
import {connect} from "react-redux"

function Login(props){
    // console.log("Login Props",props)
    var [error, setError] = useState()
    var [user, setUser] = useState({})
     let getEmail =(event)=>{
        setUser({email:event.target.value, password : user.password})
        user.email = event.target.value
    }
    let getPassword = (event)=>{
         setUser({password:event.target.value, email: user.email})
        user.password = event.target.value
    }
     let login = function(){
         if(user.email == 'surbhi.neosoft@gmail.com' && user.password == "Surbhi14"){
             setError('Success')
            //  props.informlogin("Surbhi")
         }
         else{
             setError('No Success')
         }
       console.log("User is trying to login",user)
       
      let loginapiurl = "https://apibyashu.herokuapp.com/api/login"
           axios({
               url:loginapiurl,
               method: "post",
               data: user
          }).then((response)=>{
              console.log("Response data login API", response.data)
              if(response.data.token){
                  localStorage.token = response.data.token
                  localStorage.email = response.data.email
                  props.history.push("/")
                  props.dispatch({
                      type : "LOGIN",
                      payload : response.data
                  })
              }
              else{
                  alert("Invalid Credentials")
              }
            },(error)=>{
                console.log("Error login API",error)
            })
    }
    return(
        <div>
             <div style={{width:"50%" , margin:"auto"}}>
                <div className="form-group">
                    <label>Email</label>
                <input type="email" class="form-control" onChange={getEmail}></input>
                {user.email}
                {/* {user && <label>{user.email}</label>} conditional rendering */}
                </div>
                
                <div className="form-group">
                <label>Password</label>
                <input type="password" class="form-control" onChange={getPassword}></input>
                {user.password}
                </div>
                <div style={{color:"red"}}>
                    {error}
                </div>
                <div style = {{float: "right"}}>
                    <Link to = "/forgot">Forgot Password? </Link>
                </div>
                <div>
                    <Link to = "/signup">New user? Click Here </Link>
                </div>
              <button className="btn btn-primary" onClick={login}>Login</button>
            </div>
            
        </div>
    )
}
Login = withRouter(Login) 
export default connect()(Login)
//This line adds dispatch props to login component