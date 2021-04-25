import { Link } from "react-router-dom";


function Cake(props){
// console.log("cake props", props)
    return (

		<div className="card" style={{width: "16rem", display:"inline-block", margin:"10px"}}>
            <Link to={"/cake/"+ props.cakedata.cakeid}><img src={props.cakedata.image} className="card-img-top" alt="..."  style={{width:"100%", height:"215px"}}/></Link>
            <div className="card-body">
                <h5 className="card-title" style={{textAlign:"center"}}>{props.cakedata.name}</h5>    
            </div>
		</div>	
	)
}

export default Cake;