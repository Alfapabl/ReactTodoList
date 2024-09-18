import React from "react";

function Form(props) {


    return(
    <div className="form">
        <input onChange={props.handleChange} type="text" value={props.Text} />
        <button onClick={props.addItem}>
        <span>Add</span>
        </button>
    </div>
    )
    
}

export default Form;