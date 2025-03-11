
// ✅ Main Component
import { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";

// ✅ Main Component
function MainComp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    // ✅ Load tasks from localStorage on initial render
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // ✅ Input handler
  const inputChangeHandler = (e) => {
    setTask(e.target.value);
  };

  // ✅ Submit handler
  const btnSubmit = async () => {
    if (task.trim() === "") return; // Ignore empty tasks

    try {
      const result = await sendToDB(task); // Send task to backend

      if (result.success) {
        setTasks((prevTasks) => [...prevTasks, task]); // Add task to state only on success
        setTask(""); // Clear input after adding
      } else {
        console.error("Failed to add task");
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // ✅ Send task to backend
  const sendToDB = async (task) => {
    const response = await fetch("http://localhost:5000/posttask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }), // ✅ Send correct format
    });

    return await response.json(); // ✅ Return backend response
  };

  // ✅ Save tasks to localStorage when state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="mt-12 h-5/6 flex flex-col items-center gap-12 justify-center">
      {/* Card */}
      <div className="card w-2/3 h-1/3 border-white border bg-neutral-900">
        <div className="flex flex-row items-center justify-center h-full gap-12">
          <input
            type="text"
            placeholder="Add Task"
            className="input input-lg"
            value={task}
            onChange={inputChangeHandler}
          />
          <div>
            <button className="btn btn-accent btn-lg" onClick={btnSubmit}>
              Add Task
            </button>
          </div>
        </div>
      </div>

      {/* ShowTasks Component */}
      <ShowTasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}


function ShowTasks({ tasks, setTasks }) {
  // ✅ Remove task based on index
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
    console.log(updatedTasks);
  };

  return tasks.length > 0 ? ( // ✅ Use a ternary operator or direct check
    <div className="w-2/3 h-2/3 border-white border bg-neutral-900 overflow-y-auto">
      <div className="flex flex-col items-start justify-start h-full gap-4 w-full">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="tasks flex gap-12 border w-full h-16 items-center border-white"
          >
            <h2 className="text-2xl w-10/12">{task}</h2>
            <button className="btn btn-error" onClick={() => removeTask(index)}>
              ⛔
            </button>
          </div>
        ))}
      </div>
    </div>
  ) : null; // ✅ Return `null` if no tasks exist
}

// ✅ App Component
function App() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <MainComp />
    </div>
  );
}

export default App;
