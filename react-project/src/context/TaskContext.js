import React, { createContext, useState, useContext } from 'react';

// 1. יצירת ה-Context עצמו
const TaskContext = createContext();

// 2. יצירת ה-Provider - הקומפוננטה שתעטוף את האפליקציה
export const TaskProvider = ({ children }) => {
  // כאן נשמור את רשימת המשימות
  const [tasks, setTasks] = useState([]);

  const addTask = (taskData) => {
  const newTask = {
    id: Date.now().toString(), // מזהה ייחודי
    title: taskData.title || '', 
    description: taskData.description || '',
    priority: taskData.priority || 'Medium', // ברירת מחדל: עדיפות בינונית
    status: 'Todo', // ברירת מחדל: טרם בוצע
    estimatedTime: taskData.estimatedTime || 0, // בדקות
    actualTime: 0, // בהתחלה תמיד 0 
    createdAt: new Date().toISOString() // תמיד טוב שיהיה תאריך יצירה
  };

  setTasks([...tasks, newTask]);
};

  // פונקציה למחיקת משימה
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // פונקציה לעדכון משימה (למשל שינוי סטטוס או זמן)
  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

// 3. Custom Hook כדי שיהיה לנו קל להשתמש בזה בקומפוננטות אחרות
export const useTasks = () => {
  return useContext(TaskContext);
};