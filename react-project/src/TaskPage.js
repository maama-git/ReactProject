import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>ניהול משימות</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TaskPage;