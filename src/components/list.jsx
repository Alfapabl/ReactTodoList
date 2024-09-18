import React from "react";

function List(props) {

    return(
        <div>
        <ul>
          {props.items.map((todoItem, index) => (
            <li key={index} onClick={() => props.deleteItem(index)}>{todoItem}</li>
          ))}
        </ul>
      </div>
    )
    
}

export default List;