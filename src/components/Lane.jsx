import React from 'react';
import Task from './Task';


const Lane = ({id, title, tasks, onDragOver, onDragStart, onDrop}) => {

  return (
    <div className='lane' onDragOver={onDragOver} onDrop={(e) => {onDrop(e, id)}}>
      <h3 className='lane__title'>{title}</h3>
      <div className='lane__body'>
        {tasks?.map(task => (
          <Task {...task} key={task.id} onDragStart={onDragStart} onDragOver={onDragOver}/>
        ))}
      </div>
    </div>
  )
}

export default Lane;