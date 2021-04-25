import { Route } from "react-router";
import AddAddress from "./AddAddress";
import CartSummary from "./CartSummary";
import Order from "./Order";
import Payment from "./Payment";
import {useRouteMatch, Link} from 'react-router-dom';


function Checkout(){
    var route = useRouteMatch()
    var routeurl = route.url
    var routepath = route.path
    return (
		<div className = "row">
			<div className = "col-4">
                <Link to = {routeurl}><li >Cart Summary</li></Link>
                <Link to =  {routeurl+"/address"}><li >Add Address</li></Link>
                <Link to = {routeurl+"/payment"}><li >Payment</li></Link>
                <Link to = {routeurl+"/order"}><li >Order</li></Link>
            </div>
            <div className = "col-8">
                <Route exact path =  {routepath} component = {CartSummary}/>
                <Route exact path = {routepath+"/address"} component = {AddAddress}/>
                <Route exact path ={routepath+"/payment"} component = {Payment}/>
                <Route exact path = {routepath+"/order"} component = {Order}/>

            </div>
		</div>	
	)
}

export default Checkout;