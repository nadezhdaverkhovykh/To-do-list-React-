import { useState } from "react";
import TaskInput from "./assets/components/TaskInput/TaskInput";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <TaskInput />

      {/* <div className={s.ul_wrapper}>
        <ul className={s.tasks} id="tasks">
          {" "}
          {task.map((e, i) => (
            <li className={s.li} key={i}>
              {e}
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}

export default App;
