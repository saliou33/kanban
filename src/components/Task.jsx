import React from 'react'

const Task = ({id, title, lane, body, onDragOver, onDragStart}) => {
  return (
    <div className="task" draggable onDragOver={onDragOver} onDragStart={(e) => onDragStart(e, id)}>
      <h3 className='task__title'>{title}</h3>
      <p className='task__body'>{body}</p>
    </div>
  )
}

export default Task