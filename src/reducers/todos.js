import * as types from '../constants/ActionTypes';

const todos = (state = [], action) => {
  let actionData = action.payload;
  switch (action.type) {

    case types.ADD_TODO_REQUEST: {
      console.log('ADD_TODO started');
      return state;
      break;
    }
    case types.ADD_TODO_SUCCESS: {
      console.log('ADD_TODO succeeded');
      return [
        ...state,
        action.payload
      ];
      break;
    }
    case types.ADD_TODO_ERROR: {
      console.log(`ADD_TODO failed. Message : ${action.payload.message}`);
      return state;
      break;
    }

    case types.MARK_ALL_SUCCESS: {
      console.log('MARK_ALL succeeded')
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

      break;
    }
    case types.MARK_ALL_REQUEST: {
      console.log('MARK_ALL started');
      return state;
      break;
    }
    case types.MARK_ALL_ERROR : {
      console.log(`MARK_ALL failed. Message : ${action.payload.message}`);
      return state;
      break;
    }

    case types.TOGGLE_TODO_SUCCESS: {
      console.log('TOGGLE_TODO succeeded');
      return state.map(todoItem => {
          if(todoItem.id !== actionData.id) {
            return todoItem;
          }
          return {...todoItem, completed: !todoItem.completed };
        }
      );
      break;
    }
    case types.TOGGLE_TODO_REQUEST: {
      console.log('TOGGLE_TODO started');
      return state;
      break;
    }
    case types.TOGGLE_TODO_ERROR : {
      console.log(`TOGGLE_TODO failed. Message : ${action.payload.message}`);
      return state;
      break;
    }

    case types.SAVE_TODO_SUCCESS: {
      console.log('SAVE_TODO succeeded');
      return state.map(todoItem => {
          if(todoItem.id !== actionData.id) {
            return todoItem;
          }
          return {...todoItem, content: actionData.content, isEditing: false };
        }
      );
      break;
    }
    case types.SAVE_TODO_REQUEST: {
      console.log('SAVE_TODO started');
      return state;
      break;
    }
    case types.SAVE_TODO_ERROR : {
      console.log(`SAVE_TODO failed. Message : ${action.payload.message}`);
      return state;
      break;
    }

    case types.REMOVE_TODO_SUCCESS: {
      console.log('REMOVE_TODO succeeded');
      return state.filter(todoItem => (todoItem.id !== actionData.id));
      break;
    }
    case types.REMOVE_TODO_REQUEST: {
      console.log('REMOVE_TODO started');
      return state;
      break;
    }
    case types.REMOVE_TODO_ERROR : {
      console.log(`REMOVE_TODO failed. Message : ${action.payload.message}`);
      return state;
      break;
    }

    case types.CLEAR_COMPLETED_SUCCESS: {
      console.log('CLEAR_COMPLETED succeeded');
        return state.filter(todoItem => (!todoItem.completed));
      break;
    }
    case types.CLEAR_COMPLETED_REQUEST: {
      console.log('CLEAR_COMPLETED started');
      return state;
      break;
    }
    case types.CLEAR_COMPLETED_ERROR : {
      console.log(`CLEAR_COMPLETED failed. Message : ${action.payload.message}`);
      return state;
      break;
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

    default:
      return state;
  }
}

export default todos;
