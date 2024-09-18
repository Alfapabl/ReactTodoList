import React, { useState } from "react";
import Heading from "./heading";
import Form from "./form";
import List from "./list";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
    
  }


  return (
    <div className="container">
      <Heading />
      <Form Text= {inputText} addItem={addItem} handleChange={handleChange} />
      <List items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
