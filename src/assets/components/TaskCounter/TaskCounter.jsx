import React from "react";
import s from "./TaskCounter.module.css";
const TaskCounter = ({ task }) => {
  return (
    <div>
      <p className={s.counter}>Tasks to do: {task.length} </p>
    </div>
  );
};

export default TaskCounter;
