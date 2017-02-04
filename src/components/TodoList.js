import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick, onTodoDoubleClick, onTodoEnterKeyPress, onTodoRemoveClick}) => {
  if (todos.length === 0)
    return <div>Add Todos</div>
  return (
    <ul>
      {
        todos.map(item =>
          <Todo key={item.id}
            {...item}
            onClick={() => onTodoClick(item.id)}
            onDoubleClick={() => onTodoDoubleClick(item.id)}
            onRemoveClick={() => onTodoRemoveClick(item.id)}
            onEnterKeyPress={(content) => onTodoEnterKeyPress(item.id, content)}
          />)
      }
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;
