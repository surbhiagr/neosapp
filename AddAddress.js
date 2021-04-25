
import { useState } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { Link } from "react-router-dom";
function AddAddress(props) {
    let addressForm = (event)=>{
        event.preventDefault()
    }

	var [formerror, setFormError] = useState([])
	var validate = function(elements){
		var errors = {}
		// console.log("Elements recieved by validate",elements,elements.name,elements.phone)
		if(!elements.name.value && !elements.phone.value){
			errors.name = "Required Field"
			errors.phone = "Required Field"
		}
		// if(elements.name.value!="Surbhi"){
		// 	errors.name = "Enter correct name"
		// }

		var erroekey = Object.keys(errors)
		if(erroekey.length>0){
			return errors;
		}
		else{
			return false
		}
		
	}

	var submit = function(){
		var form = document.getElementById('address-section')
		// console.log("Element in this form",form.elements)
		var formerrors = validate(form.elements)
		if(formerrors){
			setFormError(formerrors)
		}
		else{
			setFormError({})
			console.log("Validation Complete")
		}
	}
    return (
        <div className="col-md-10 ">
			{/* {console.log('Add address props',props)} */}
             <form className="form-group "  id = "address-section"style={{textAlign:"left"}} onSubmit={addressForm} > 
            <input style={{margin:"20px"}} name = 'name'  type="text" className="form-control" placeholder="Enter Your Name"/> 
            <div className = 'custom-form-error'>
				{formerror?.name && <div> {formerror.name}</div>}
				</div>
			<input style={{margin:"20px"}}  name = 'phone' type="text" className="form-control" placeholder="Enter Your Phone"/> 
			<div className = 'custom-form-error'>
				{formerror?.phone && <div> {formerror.phone}</div>}
				</div>
			<textarea style={{margin:"20px"}}className="form-control" placeholder="Enter Your Address"/> 
            <div className="row">
            <div className="col-md-6">
            <input style={{margin:"20px"}}type="text" className="form-control" placeholder="Enter Your City"/>
            </div>
            <div className="col-md-6">
            <input style={{margin:"20px"}}type="text" className="form-control" placeholder="Enter Your Pincode"/>
            </div>
            </div>
            <button style={{margin:"20px"}} onClick = {submit}className="btn btn-primary form-control">Submit</button>
        </form>
        </div>
       
    )
}

export default connect(function(state,props){
    return{
        user:state?.user
    }
})(AddAddress)