/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { TaskCard } from "./TaskCard";

// eslint-disable-next-line react/prop-types
export const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => {
        <TaskCard task={task} key={task._id} />;
      })}
    </div>
  );
};
