import React, { useState } from 'react';
import { Header, Lane } from './components';

import './App.css';

const App = () => {
  const data = {
    lanes: [
      { id: 1, title: 'To do' },
      { id: 2, title: 'In Progress' },
      { id: 3, title: 'Review' },
      { id: 4, title: 'Done' },
    ],
    tasks: [
      { id: 1, title: 'Create Mockup', body: "Create User Friendly mockup that's up to standard.", lane: 1 },
      {
        id: 2,
        title: 'Meeting With the Client',
        body: 'Meeting the client to define the project goals',
        lane: 4,
      },
      { id: 3, title: 'Hire Engineer', body: 'Hire new engineer for the project', lane: 3 },
    ],
  };

  const [tasks, setTasks] = useState(data.tasks);

  const onDragStart = (e, id) => {
    console.log('onDragStart');
    e.dataTransfer.setData('id', id);
  };

  const onDragOver = (e) => {
    console.log('onDragOver');
    e.preventDefault();
  };

  const onDrop = (e, laneId) => {
    let id = e.dataTransfer.getData('id');
    const updatedTasks = tasks.map((task) => {
      if (task.id.toString() === id) {
        task.lane = laneId;
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(tasks);
  };

  return (
    <div className="container">
      <Header />
      <div className="board">
        {data.lanes.map((lane) => (
          <Lane
            {...lane}
            key={lane.id}
            tasks={tasks.filter((task) => task.lane === lane.id)}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragStart={onDragStart}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
