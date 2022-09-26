import React from 'react';
import Task from './Task';


const Lane = ({id, title, tasks}) => {
  return (
    <div className='lane'>
      <h3 className='lane__title'>{title}</h3>
      <div className='lane__body'>
        {tasks?.map(task => (
          <Task {...task} key={task.id}/>
        ))}
      </div>
    </div>
  )
}

export default Lane;