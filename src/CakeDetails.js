import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import {useState} from 'react';
import axios from 'axios'
const star = <FontAwesomeIcon icon={faStar} />
const heart = <FontAwesomeIcon icon={faHeart} />
function CakeDetails(){

    let[cakedetails, setCakeDetails] = useState({})
    let params = useParams()
    console.log(params.cakeid);

    useEffect(() => {
        let cakedetailapi = "https://apibyashu.herokuapp.com/api/cake/"+params.cakeid
        axios({
            method:"get",
            url:cakedetailapi
        }).then((response)=>{
            setCakeDetails(response.data.data)
        },(error)=>{
            console.log(error)
        })
    },[])
    //console.log(cakedetails);
    return(
        <div className="card" style={{margin: "20px 140px"}}>
        <div className="card-body" style={{backgroundColor: "rgba(0,0,0,.03)"}}>
            <div className="row">
                <div className="col-sm-6">
                    <div style={{margin: "10px 60px"}}>
                        <img src={cakedetails.image}
                        class="card-img-top" alt="Card image" height="300px" />
                    </div>

                </div>
                <div className="col-sm-6">
                    <div style={{margin: "10px 20px"}}>
                        <h1 className="text-uppercase font-weight-bold pt-5 pb-3">{cakedetails.name}</h1>
                        <div className="pb-3">
                            <span className="text-warning">{star} {cakedetails.ratings}</span>
                            <br/><span style={{fontSize: "18px"}}>{cakedetails.reviews}</span>
                        </div>
                        <div className="pb-3">{cakedetails.description}</div>
                        <div className="pb-3" style={{fontSize: "25px"}}><span className="text-uppercase font-weight-bold">Current price: 
                            <span className="text-warning"> ${cakedetails.price}</span>
                            </span>
                        </div>
                        <div className="pb-3"><span className="font-weight-bold" style={{fontSize: "18px"}}>Likes:{cakedetails.likes}</span>
                        </div>

                        <div className="pb-3" style={{fontSize: "25px"}}><span className="text-uppercase font-weight-bold">Weight: {cakedetails.weight}</span></div>
                        <div className="pb-3" style={{fontSize: "25px"}}><span className="text-uppercase font-weight-bold">Flavour: 
                                <span className="font-italic text-warning">{cakedetails.flavour}</span>
                            </span>
                        </div>

                        <div className="pb-3 text-uppercase" style={{fontSize: "23px"}}><span className="font-weight-bold">type</span><br/>{cakedetails.type}</div>

                        
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-sm-6">
                    <div className="font-weight-bold" style={{fontSize: "18px"}}>Ingredient:</div>
                    <div style={{fontSize: "16px"}}>{cakedetails.ingredients}</div>
                    
                </div>
                <div className="col-sm-6" style={{fontSize: "20px"}}>
                    <button type="button" class="btn btn-warning text-uppercase p-3 text-white mr-2 font-weight-bold">Add to cart</button>
                    <button type="button" class="btn btn-warning p-3 text-white font-weight-bold">{heart}</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CakeDetails;