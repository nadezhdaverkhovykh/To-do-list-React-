import React from "react";
import { useState } from "react";
import s from "./TaskInput.module.css";

const TaskInput = () => {
  const [task, setTasks] = useState([]);

  function SubmitHandler(event) {
    event.preventDefault();
    addTask(event.target.note.value);
  }
  function addTask(el) {
    const newTask = [...task];
    newTask.push(el);
    setTasks(newTask);
  }

  return (
    <>
      <div className={s.container}>
        <div className={s.form_wrapper}>
          <form action="submit" onSubmit={SubmitHandler}>
            <input
              className={s.list}
              type="text"
              name="note"
              placeholder=" Add a new task"
            />
            <button type="submit" className={s.btn}>
              +
            </button>

            <div>
              <ul>
                {task.map((e, i) => (
                  <li className={s.li} key={i}>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </form>

          {/* <div className={s.buttons_wrapper}>
        <button className={s.deleteDone}>Delete Done</button>
        <button className={s.deleteAll}>Delete All</button>
      </div> */}
        </div>
      </div>
    </>
  );
};
export default TaskInput;
