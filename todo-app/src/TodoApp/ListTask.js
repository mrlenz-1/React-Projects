import React from "react";
import { Button } from "react-bootstrap";

const ListTask = ({ task, index, removeTask }) => {
  return (
    <>
      <div className="list-task">
        {task.title}
        <Button onClick={()=>{removeTask(index)}} className="del-btn">Delete</Button>
      </div>
    </>
  );
};

export default ListTask;
