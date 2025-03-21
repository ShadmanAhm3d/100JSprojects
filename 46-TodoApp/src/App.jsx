import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Unique ID generator
import "./App.css";
import { X } from "lucide-react";

function App() {
  const [task, setTask] = useState({
    id: uuidv4(), // Generate an initial unique ID
    task: "",
  });

  const [t, setT] = useState([]);

  useEffect(() => {
    console.log(t);
  }, [t]);
  const ipChange = (e) => {
    setTask((prevTask) => ({
      ...prevTask,
      task: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!task.task.trim()) return; // Prevent submitting empty tasks

    console.log("Submitted Task:", task); // Logs the current task

    // Generate a new task with a fresh ID
    setTask({
      id: uuidv4(), // New unique ID
      task: "",
    });

    const newTask = { id: uuidv4(), task: task.task }; // Create a new task object

    setT((prevT) => [...prevT, newTask]);
    // setTimeout(() => {
    //   console.log("New Task State:", task);
    // }, 0);
  };

  const removeTask = (taskId) => {
    setT((prevT) => prevT.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <div className="heading">Todo App</div>

      <div>
        <form className="main" onSubmit={submitHandler}>
          <div>
            <label htmlFor="task">Enter task</label>
            <input
              type="text"
              placeholder=".."
              onChange={ipChange}
              value={task.task}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Display Current Task */}

      <div className="task">
        {t.length > 0 ? (
          <div className="task-main">
            {t.map((task) => {
              return (
                <div className="item" key={task.id}>
                  <p> {task.task}</p>

                  <button onClick={() => removeTask(task.id)}>
                    <X color="red"/>
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <p> No tasks </p>
        )}
      </div>
    </div>
  );
}

export default App;
