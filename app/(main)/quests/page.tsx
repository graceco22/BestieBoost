"use client"

import React, { useState } from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const QuestsPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      text: 'Drink 10 cups of water a day',
      completed: true
    },
    {
      id: 2,
      text: 'Run a marathon',
      completed: false
    }
  ]);

  const [text, setText] = useState('');

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompleted = (id: number) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    }));
  };

  return (
    <div className="todo-list" style={{ backgroundImage: 'url(/back2.png)' }}>
      <h1 className="header">BESTIE GOALS</h1> {/* Title/Header */}
      {tasks.map(task => (
        <div key={task.id} className="todo-item">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task.id)}
              style={{ marginRight: '10px' }}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none', fontSize: '20px' }}>
              {task.text}
            </span>
          </div>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
      <div className="add-task">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a new task"
          style={{ width: '100%', padding: '5px', fontSize: '16px' }}
        />
        <button onClick={() => addTask(text)}>Add</button>
      </div>

      {/* Styles */}
      <style jsx>{`
        .todo-list {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .header {
          font-size: 36px; /* Adjust the font size as needed */
          margin-bottom: 20px;
        }
        .todo-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          width: 100%;
          max-width: 400px;
        }
        .todo-item span {
          color: #888;
          text-decoration: line-through;
        }
        .add-task {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          width: 100%;
          max-width: 400px;
        }
        .add-task input {
          flex: 1;
          margin-right: 8px;
        }
      `}</style>
    </div>
  );
};

export default QuestsPage;
