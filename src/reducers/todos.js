import * as types from '../constants/ActionTypes';

const todos = (state = [], action) => {
  let actionData = action.payload;
  switch (action.type) {
    case types.ADD_TODO: {
      return [
        ...state,
        action.payload
      ];
      break;
    }

    case types.TOGGLE_TODO: {
        return state.map(todoItem =>{
          if(todoItem.id !== actionData.id) {
            return todoItem;
          }
          return {...todoItem, completed: !todoItem.completed };
        }
      );
    }

    case types.EDIT_TODO: {
      return state.map(todoItem => {
          if (todoItem.id !== actionData.id) {
            if (todoItem.isEditing)
              return {...todoItem, isEditing: false };
            else
              return todoItem;
          }
          return {...todoItem, isEditing: true };
        }
      );
    }

    case types.SAVE_TODO: {
      return state.map(todoItem => {
          if(todoItem.id !== actionData.id) {
            return todoItem;
          }
          return {...todoItem, content: actionData.content, isEditing: false };
        }
      );
    }

    case types.REMOVE_TODO:{
      return state.filter(todoItem => (todoItem.id !== actionData.id));
    }

    case types.CLEAR_COMPLETED: {
      return state.filter(todoItem => (!todoItem.completed));
    }

    case types.MARK_ALL: {
      var allItemsAreCompleted = true;
      var items = state.map(todoItem => {
        if(!todoItem.completed) {
          allItemsAreCompleted = false;
          return {...todoItem, completed: true};
        }
        else return todoItem;
      });

      if(allItemsAreCompleted)
        return state.map(todoItem => ({...todoItem, completed: false}));
      else
        return items;
    }

    default:
      return state;
  }
}

export default todos;
