import React from 'react';
import MarkAll from '../containers/MarkAll';

const AddTodoForm = ({ onSubmit }) => {
  let input;
  return (
    <div>
      <form onSubmit={e => {
          e.preventDefault();
          if(!input.value.trim())
            return;
          onSubmit(input.value);
          input.value = '';
        }
      }>
        <input ref={node => { input = node }} />
      </form>
      <MarkAll/>
    </div>
  )
}

export default AddTodoForm;
