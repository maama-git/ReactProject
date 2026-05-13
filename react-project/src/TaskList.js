import React from 'react';
import { useTasks } from './context/TaskContext';

const TaskList = () => {
  const { tasks, deleteTask, updateTask } = useTasks();

  // פונקציה עזר לשינוי הסטטוס
  const handleStatusChange = (task, newStatus) => {
    updateTask({ ...task, status: newStatus });
  };

  return (
    <div>
      <h3>המשימות שלי</h3>
      {tasks.length === 0 ? <p>אין משימות להצגה.</p> : (
        <table border="1" style={{ width: '100%', textAlign: 'right', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th>כותרת</th>
              <th>עדיפות</th>
              <th>זמן משוער</th>
              <th>סטטוס</th>
              <th>פעולות</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.priority}</td>
                <td>{task.estimatedTime} דק'</td>
                <td>
                  <select 
                    value={task.status} 
                    onChange={(e) => handleStatusChange(task, e.target.value)}
                  >
                    <option value="Todo">טרם בוצע</option>
                    <option value="In Progress">בתהליך</option>
                    <option value="Done">בוצע</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => deleteTask(task.id)} style={{ color: 'red' }}>מחק</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;