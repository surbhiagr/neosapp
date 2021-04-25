import { Link } from "react-router-dom";
import axios from 'axios'
import {useState, useEffect, useReducer} from 'react'
import { connect } from 'react-redux'

function Cart(props){

		var token = localStorage.getItem('token')
		var [cart, setCart] = useState([])
		useEffect(()=> {
			axios({
				method : "post",
				url :  'https://apibyashu.herokuapp.com/api/cakecart',
				headers: {
					authtoken: token
				  },
				data: {}
			}).then((response)=>{
				console.log("response data  cart get api",response.data.data)
				setCart(response.data.data)
				props.dispatch({
                    type:"ADDTOCART",
                    payload:response.data.data
                })
		 },
		   
			(error)=>{console.log("error   cart get api",error)})
		},[])
		console.log("Cart >>>>>>", cart)
    
    
 
    let continueShopping = () => {
      props.history.push("/")
    }

	let [removecart, SetRemovecart]= useState(false)
	let Remove = (data) =>{
		 let removecartapi = "https://apibyashu.herokuapp.com/api/removecakefromcart"
		 useEffect(()=> {
           axios({
               url:removecartapi,
               method: "post",
			   headers:{
                authtoken: localStorage.token
              },
			data: {cakeid:data}
          }).then((response)=>{
			console.log("Remove cart API", response.data)
			SetRemovecart(true)
		
		  },(error)=>{
			  console.log("Error Remove cart API",error)
		  })
		},[])
	}
	
    return (

		
		<div>
			<div className="container">
      <div className="row">
          <div className="col-sm-12 col-md-10 col-md-offset-1">
              <table className="table table-hover">
                  <thead>
                      <tr>
                          <th>Product</th>
                          <th> </th>
                          <th> </th>
                          <th> </th>
                          <th className="text-center">Price</th>
                          <th> </th>
                      </tr>
                  </thead>
                  <tbody>
                  {cart?.length>0 && cart.map((each, index) => {
                    return (
                      <tr>
                      <td className="col-sm-8 col-md-6">
                      <div className="media">
                          <a className="thumbnail pull-left" href="#"> <img className="media-object" style={{width:"60px", height:"60px"}} src={each.image} /> </a>
                          <div className="media-body">
                    <h4 className="media-heading"><a href="#">{each.name}</a></h4>
                              
                          </div>
                      </div></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      
                    <td className="col-sm-1 col-md-1 text-center"><strong>${each.price}</strong></td>
                    
                      <td className="col-sm-1 col-md-1 text-center"></td>
                      <td className="col-sm-1 col-md-1">
                      <button type="button" className="btn btn-danger">
                          <span className="glyphicon glyphicon-remove" onClick={()=>Remove(each.cakeid)}></span> Remove
						  {/* onClick={()=>remove(each.cakeid)} */}
                      </button></td>
                  </tr>
                    
                    )  
                    })} 
                      
                   
                      <tr>
                          <td>   </td>
                          <td>   </td>
                          <td>   </td>
						  <td>   </td>
						  <td>   </td>
                          <td>	
                          <button onClick= {continueShopping} type="button" className="btn btn-default">
                              <span className="glyphicon glyphicon-shopping-cart text-left" ></span> Continue Shopping
                          </button></td>
                          <td>
						  <Link to = '/checkout'><button class = 'btn btn-success'>Checkout <span className="glyphicon glyphicon-play"></span></button></Link></td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
		
		</div>	
	)
}

export default connect()(Cart);