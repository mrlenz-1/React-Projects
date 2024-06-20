import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./TodoApp/Todo.js";

const App = () => {
  return (
    <>
      <div className="App">
        <Todo />
      </div>
    </>
  );
};

export default App;
