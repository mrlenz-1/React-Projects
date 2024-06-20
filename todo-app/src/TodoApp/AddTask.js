import React, { useState } from "react";
import "./Todo.css";
import { Button } from "react-bootstrap";

const AddTask = ({addTask}) => {
  const [value, setValue] = useState("");

  const addItem = () => {
    addTask(value);
    setValue("");
  };

  return (
    <>
      <h2>Add Tasks here</h2>
      <div className="input-content">
        <input
          className="input"
          type="text"
          placeholder="Enter Tasks"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <Button onClick={addItem} className="btn">
          Add
        </Button>
      </div>
    </>
  );
};

export default AddTask;
