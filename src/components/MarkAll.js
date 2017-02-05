import React from 'react';

const MarkAll = ({onClick, isEnabled}) => {
  return (
    <div className="todo-item-mark-all">
        { isEnabled ?
            <span onClick={() => onClick()}><i className="cr-icon fa fa-check"></i></span> :
            <span><i className="cr-icon fa fa-check"></i></span> 
        }

    </div>)
}

export default MarkAll;
