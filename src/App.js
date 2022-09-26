import React from 'react';
import { Header, Lane } from './components';

import './App.css';

const App = () => {
  const lanes = [
    { id: 1, title: 'To do' },
    { id: 2, title: 'In Progress' },
    { id: 3, title: 'Review' },
    { id: 4, title: 'Done' },
  ];

  const tasks = [
    { id: 1, title: 'Create Mockup', body: "Create User Friendly mockup that's up to standard.", lane: 1 },
    {
      id: 2,
      title: 'Meeting With the Client',
      body: 'Meeting the client to define the project goals',
      lane: 4,
    },
    { id: 3, title: 'Hire Engineer', body: 'Hire new engineer for the project', lane: 3 },
  ];

  return (
    <div className="container">
      <Header />
      <div className="board">
        {lanes.map((lane) => (
          <Lane {...lane} key={lane.id} tasks={tasks.filter((task) => task.lane === lane.id)} />
        ))}
      </div>
    </div>
  );
};

export default App;
