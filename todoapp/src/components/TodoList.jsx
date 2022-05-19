import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="list_style">
        <input
          type="radio"
          id="radio"
          name="radio"
          
          // onChange={() => {
          //  props.onRadio(props.id)
          //   }}
        />
        <li>{props.text}</li>
        <button
          id="button2"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          x
        </button>
      </div>
    </>
  );
};

export default ToDoList;
