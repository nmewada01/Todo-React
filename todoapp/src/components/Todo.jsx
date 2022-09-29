import React, { useState } from "react";
import ToDoList from "./TodoList";



const Todo = () => {
  const [list, setlist] = useState("");
  const [Items, setItems] = useState([]);


  const Events = (event) => {
    setlist(event.target.value);
  };

  // const Change = () => {
  //  //console.log("jay")
  //  setItems([...Items, {
  //    id:uuid(),
  //    status:false,
     
  // }])
  // }; 


  const Itemslist = () => {
    setItems((ArrayItem) => {
      return [...ArrayItem, list];
    });
    setlist("");
  };

  const deleteItems = (id) =>{
    alert("Your Task Removed")
    setItems((ArrayItem) => {
      return ArrayItem.filter((Element,index) => {
        return index !== id;
      })
    })
  }


  return (
    <>
      <div className="Main">
        <div className="Inside_Main">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Write Something"
            onChange={Events}
            value={list}
          />
          <button className="AddButton" onClick={Itemslist}>+</button>

          {Items.map((ValueOfItems, index) => {
            return <ToDoList key={index} id={index} text={ValueOfItems}  onSelect={deleteItems}  />;
          })}

         
        </div>
      </div>
    </>
  );
};

export default Todo;
