import React, { PropTypes } from 'react';

const Todo = (props) => {
  let { onClick, onDoubleClick, onRemoveClick, completed, content, isEditing} = props;
  let onEnterKeyPress = props.onEnterKeyPress;
  let todoInput;
  if (!isEditing) {
    return (
      <li
        onDoubleClick={onDoubleClick}
        style={{
          textDecoration: completed ? 'line-through': 'none'
        }}
      >
        <input type="checkbox" checked={completed} onChange={onClick}></input>
          {content}
        <span onClick={onRemoveClick}>{" "}Удалить</span></li>
    )
  }
  else {
    return (
      <input ref={(input) => todoInput = input}
              type="text"
              defaultValue={content}
              onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    if (todoInput.value === '')
                      onRemoveClick();
                    else
                      onEnterKeyPress(todoInput.value);
                  }
                }
              }>
              </input>
    )
  }
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired
}

export default Todo;
