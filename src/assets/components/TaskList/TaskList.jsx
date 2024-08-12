import React from "react";
import s from "./TaskList.module.css";

const TaskList = ({ task, setTasks }) => {
  function toglleTodo(id) {
    setTasks(
      task.map((task) => {
        if (task.id !== id) return task;
        return { ...task, done: !task.done };
      })
    );
    console.log(task);
  }

  function deleteDone(id) {
    setTasks(task.filter((e) => e.id !== id));
  }

  return (
    <div>
      <ul className={s.ul}>
        {task.map((e, i) => (
          <li className={e.done ? s.task_done : s.li} key={i}>
            {e.text}
            <div className={s.buttons}>
              <button className={s.taskButton} onClick={() => toglleTodo(e.id)}>
                <img src="./done.png" alt="Сделано" />
              </button>
              <button className={s.taskButton} onClick={() => deleteDone(e.id)}>
                <img src="./delete.png" alt="Удалить" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
