import {Component} from "react" 
import axios from "axios"
class Signup extends Component{
    constructor(){
        super()
        this.state ={
          onlineuser : 0
        }
//        alert("in construction")
    }
    user = {}
    
//    componentDidMount(){
//        alert("mounted");
//    }
//    componentDidUpdate(){
//        alert("updated")
//    }
    
    goOnline =()=>{
        this.setState({
            onlineuser : this.state.onlineuser+1
        })
    }
    
    getName =(event)=>{
        this.user.name = event.target.value
    }

    getEmail =(event)=>{
        this.user.email = event.target.value
    }
    getPassword = (event)=>{
        this.user.password = event.target.value
    }
    register = ()=>{
        if(!this.user.email || !this.user.password || !this.user.name){
            this.setState({
                errorMessage:"Please Fill Details"
            })
        }
        else{
            let apiurl = "https://apibyashu.herokuapp.com/api/register"
            axios({
                url:apiurl,
                method: "post",
               data: this.user
           }).then((response)=>{console.log(response.data);},(error)=>{console.log(error);})
        }
        // this.setState({
        //     user:this.state.user+1
        // })
    }
    render(){
        return(
            <div style={{width:"50%" , margin:"auto"}}>
                <div className="form-group">
                    <label>Email</label>
                <input type="email" class="form-control" onChange={this.getEmail}></input>
                {/* Hey {this.state.onlineuser} */}
                </div>
                 <div className="form-group">
                    <label>Name</label>
                <input type="name" class="form-control" onChange={this.getName}></input>
                </div>
                <div className="form-group">
                <label>Password</label>
                <input type="password" class="form-control" onChange={this.getPassword}></input>
                </div>
                <div style={{color:"red"}}>
                    {this.state.errorMessage}
                </div>
              <button className="btn btn-primary" onClick={this.register}>Register</button>
                {/* <button className="btn btn-primary" onClick={this.goOnline}>Online</button> */}
            </div>
        )
    }
}
export default Signup