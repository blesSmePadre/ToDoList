import React from 'react';

const ClearCompleted = ({onClick, isEnabled}) => {
  return (
    <div className="todo-item-remove-completed">
      {
        isEnabled ?
          <span onClick={() => onClick()} className = "btn btn-default">Удалить завершенные</span> :
          <span className= "btn btn-default">Удалить завершенные</span>
      }
    </div>
  )
}

export default ClearCompleted;
