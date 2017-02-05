import React, { PropTypes } from 'react';

const Todo = (props) => {
  let { onClick, onDoubleClick, onRemoveClick, completed, content, isEditing} = props;
  let onEnterKeyPress = props.onEnterKeyPress;
  let todoInput;
  return (
    <div className="todo-item">
      <div className="todo-item-left">
          <div className="checkbox">
              <label>
                  <input type="checkbox" disabled={isEditing ? 'disabled' :''} checked={completed} onChange={onClick}></input>
                  <span className="cr"><i className="cr-icon fa fa-check"></i></span>
              </label>
          </div>
      </div>
      <div onDoubleClick={onDoubleClick} className={completed ? 'todo-item-middle todo-item-completed' : 'todo-item-middle'}>
          { !isEditing ?
              <span className="todo-item-content">{content}</span> :
              <input
                  type="text"
                  className="form-control"
                  placeholder="Заметка"
                  ref={(input) => todoInput = input}
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
                  }
              />
          }
      </div>
      <div className="todo-item-right">
          <div className="delete-button">
              <span onClick={onRemoveClick} className="btn btn-default">
                  <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              </span>
          </div>
      </div>
    </div>
  )

    return (
      <input >
        </input>
    )
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired
}

export default Todo;
