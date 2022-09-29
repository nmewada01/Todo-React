import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="list_style">
        <div className="dekho">
        <input
          type="radio"
          className="radio"
          name="radio"
          onChange={() => {
            alert("Task Completed");
            alert("Click Delete button on right side to delete your Task");
          }}
        />
        <li>{props.text}</li>
        <button
          className="button2"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </button>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
