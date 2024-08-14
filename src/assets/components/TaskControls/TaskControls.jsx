import React from "react";
import s from "./TaskControls.module.css";
const TaskControls = ({ task, setTasks }) => {
  function deleteHandler() {
    setTasks([]);
    localStorage.clear("task");
  }

  function deleteDone() {
    const taskDone = task.filter((e) => !e.done);
    setTasks(taskDone);
    localStorage.setItem("task", JSON.stringify(taskDone));
  }

  return (
    <div className={s.controls_buttons}>
      <button className={s.deleteButton} onClick={deleteDone}>
        Delete Done Tasks
      </button>
      <button className={s.deleteButton} onClick={deleteHandler}>
        Delete all Tasks
      </button>
    </div>
  );
};

export default TaskControls;
