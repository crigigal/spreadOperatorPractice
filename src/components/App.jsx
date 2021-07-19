import React from "react";

function App() {
  const [task, setTask] = React.useState("");
  const [list, setList] = React.useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setTask(newValue);
  }

  function addElement() {
    setList((prevValue) => {
      return [...prevValue, task];
    });
    setTask("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={task} />
        <button onClick={addElement}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((toDoItem) => (
            <li>{toDoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
