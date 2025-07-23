import { useState } from 'react';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">React To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-400 p-2 rounded w-64"
          placeholder="Enter a new task"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      </div>
      <ul className="w-full max-w-md">
        {tasks.map(task => (
          <li key={task.id} className="flex justify-between items-center bg-white p-2 mb-2 rounded shadow">
            <span
              className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
              onClick={() => toggleComplete(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
