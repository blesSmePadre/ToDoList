import React from 'react';

const ClearCompleted = ({onClick}) => {
  return (<span onClick={() => onClick()}>Удалить завершенные</span>)
}

export default ClearCompleted;
