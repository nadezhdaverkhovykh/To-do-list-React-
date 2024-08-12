import React from "react";
import s from "./TaskInput.module.css";

const TaskInput = ({ addTask }) => {
  function submitHandler(event) {
    event.preventDefault();
    let toDo = event.target.note.value;
    addTask(toDo);
  }

  return (
    <>
      <div className={s.container}>
        <div className={s.form_wrapper}>
          <form action="submit" onSubmit={submitHandler}>
            <input
              className={s.list}
              type="text"
              name="note"
              placeholder=" Add a new task"
            />
            <button type="submit" className={s.btn}>
              +
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default TaskInput;
