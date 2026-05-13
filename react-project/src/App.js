import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskPage from './TaskPage'; 

function App() {
  return (
    <TaskProvider>
      <div className="App">
        {/* השם שראית מקודם */}
        <h1 style={{ textAlign: 'center' }}>FocusFlow</h1> 
        
        {/* כאן אנחנו קוראים למסך המשימות שבנינו */}
        <TaskPage /> 
        
      </div>
    </TaskProvider>
  );
}

export default App;
