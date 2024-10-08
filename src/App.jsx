import { useState, useEffect } from "react";
import TaskInput from "./assets/components/TaskInput/TaskInput";
// import TaskItem from "./assets/components/TaskItem/TaskItem";
import TaskCounter from "./assets/components/TaskCounter/TaskCounter";
import TaskControls from "./assets/components/TaskControls/TaskControls";
import TaskList from "./assets/components/TaskList/TaskList";
function App() {
  const [task, setTasks] = useState([]);
  useEffect(() => {
    const saveTask = JSON.parse(localStorage.getItem("task")) || [];
    setTasks(saveTask);
  }, []);

  function addTask(el) {
    const newTask = [...task, { id: Date.now(), text: el, done: false }];
    setTasks(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
  }
  return (
    <>
      <div className="container">
        <TaskCounter task={task} />
        <TaskInput addTask={addTask} />
        <TaskList task={task} setTasks={setTasks} />
        {/* <TaskItem task={task} toggleTodo={toggleTodo} deleteDone={deleteDone} /> */}
        <TaskControls task={task} setTasks={setTasks} />
      </div>
    </>
  );
}

export default App;
