import React from 'react'

const Task = ({id, title, lane, body}) => {
  return (
    <div className="task">
      <h3 className='task__title'>{title}</h3>
      <p className='task__body'>{body}</p>
    </div>
  )
}

export default Task