import React, { useContext, useEffect } from 'react';
import TaskContext from '../../context/TaskContext';
import TaskForm from './TaskForm';

const TaskList = () => {
  const { tasks, getTasks } = useContext(TaskContext);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <div>
      <TaskForm />
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
