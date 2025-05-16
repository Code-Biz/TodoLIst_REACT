import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [item, setItem] = useState({});
  // const [listInputs, setListInputs] = useState({});
  //list - > itemsList
  const handleAddTodo = () => {
    if (headingInput.trim() !== "") {
      setTodos([...todos, { heading: headingInput, itemsList: [] }]);
      setHeadingInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const handleDeletelist = (index1, index2) => {
    const newTodos = [...todos];
    newTodos[index1].itemsList.splice(index2, 1);
    setTodos(newTodos);
  };
  const handleAddList = (index) => {
    if (item[index] && item[index].trim() !== "") {
      const newTodos = [...todos];
      newTodos[index].itemsList.push(item[index]);
      console.log(newTodos[index]);
      console.log(item[index]);

      setTodos(newTodos);
      setItem({ ...item, [index]: "" });
    }
  };
  const handleListInputChange = (index, value) => {
    setItem({ ...item, [index]: value });
  };
  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {
              setHeadingInput(e.target.value);
            }}
          />

          <button className="add-list-button" onClick={handleAddTodo}>
            Add Heading
          </button>
        </div>
      </div>
      <div className="todo_main">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            <div className="heading_todo">
              <h3>{todo.heading}</h3>
              <button
                className="delete-button-heading"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete Heading
              </button>
            </div>
            <ul>
              {todo.itemsList.map((itm, itmIndex) => {
                return (
                  <li key={itmIndex} className="todo_inside_list">
                    <p>{itm}</p>
                    <button
                      className="delete-button"
                      onClick={() => handleDeletelist(index, itmIndex)}
                    >
                      Delete Item
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="add_list">
              <input
                type="text"
                className="list-input"
                placeholder="Add List"
                value={item[index] || ""} //Here we are using item [index] to just keep a reference to the state named item which is changing dynamically on every keypress theres
                onChange={(e) => handleListInputChange(index, e.target.value)}
              />
              <button
                className="add-list-button"
                onClick={() => handleAddList(index)}
              >
                Add Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
