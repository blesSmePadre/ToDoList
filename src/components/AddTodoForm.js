import React from 'react';
import MarkAll from '../containers/MarkAll';
import '../styles/AddToDoForm.css';

const AddTodoForm = ({ onSubmit, isMarkAllEnabled }) => {
  let input;
  return (
    <div className="todo-item-add">
      <form onSubmit={e => {
          e.preventDefault();
          if(!input.value.trim())
            return;
          onSubmit(input.value);
          input.value = '';
        }
      }>
        <MarkAll isEnabled={isMarkAllEnabled}/>
        <input placeholder="Что необходимо сделать?" className="form-control" ref={node => { input = node }} />
      </form>
    </div>
  )
}

export default AddTodoForm;
