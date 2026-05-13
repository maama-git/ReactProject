import React, { useState } from 'react';
import { useTasks } from './context/TaskContext';

const TaskForm = () => {
  const { addTask } = useTasks();

  // ניהול הסטייט המקומי של השדות בטופס
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    estimatedTime: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return alert("חובה להזין כותרת!");

    // שליחה ל-Context
    addTask(formData);

    // איפוס הטופס לאחר שליחה
    setFormData({ title: '', description: '', priority: 'Medium', estimatedTime: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
      <h3>הוספת משימה חדשה</h3>
      
      <div>
        <label>כותרת: </label>
        <input 
          type="text" 
          value={formData.title} 
          onChange={(e) => setFormData({...formData, title: e.target.value})} 
        />
      </div>

      <div>
        <label>תיאור: </label>
        <textarea 
          value={formData.description} 
          onChange={(e) => setFormData({...formData, description: e.target.value})} 
        />
      </div>

      <div>
        <label>עדיפות: </label>
        <select 
          value={formData.priority} 
          onChange={(e) => setFormData({...formData, priority: e.target.value})}
        >
          <option value="Low">נמוכה</option>
          <option value="Medium">בינונית</option>
          <option value="High">גבוהה</option>
        </select>
      </div>

      <div>
        <label>זמן משוער (בדקות): </label>
        <input 
          type="number" 
          value={formData.estimatedTime} 
          onChange={(e) => setFormData({...formData, estimatedTime: e.target.value})} 
        />
      </div>

      <button type="submit">הוסף משימה</button>
    </form>
  );
};

export default TaskForm;