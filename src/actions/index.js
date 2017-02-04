import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';
import * as helpers from './asyncFetchHelpers';

/*
let nextTodoId = 0;
export const addTodo = (content) => {
 return {
   type: types.ADD_TODO,
   payload: {
     id: nextTodoId++,
     content,
     completed: false,
     isEditing: false
   }
 }

 export const markAll = () => {
   return {
   type: types.MARK_ALL
  }
  }

  export const toggleTodo = (id) => {
   return {
     type: types.TOGGLE_TODO,
     payload: {
       id
     }
   }
  }

  export const saveTodo = (id, content) => {
    return {
      type: types.SAVE_TODO,
      payload: {
        id,
        content
      }
    }
  }

  export const removeTodo = (id) => {
    return {
      type: types.REMOVE_TODO,
      payload: {
        id
      }
    }
  }

  export const clearCompleted = () => {
    return {
      type: types.CLEAR_COMPLETED
    }
  }
}*/

export const setVisibilityFilter = (filter) => {
 return {
   type: types.SET_VISIBILITY_FILTER,
   payload: filter
 }
}

export const editTodo = (id) => {
    return {
      type: types.EDIT_TODO,
      payload: {
        id
      }
    }
}





/* add Todo async */
export const addTodoRequest = () => {
  return {
    type: types.ADD_TODO_REQUEST
  }
}

export const addTodoError = (error) => {
  return {
    type: types.ADD_TODO_ERROR,
    payload: error
  }
}

export const addTodoSuccess = (id, content, creationDate) => {
  return {
    type: types.ADD_TODO_SUCCESS,
    payload: {
      id,
      content,
      completed: false,
      isEditing: false,
      creationDate: creationDate
    }
  }
}

export const addTodo = (content) => {
  return (dispatch, getState) => {
    dispatch(addTodoRequest(content));
    fetch('/api/rest/AddItem', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("tokenInfo")
      },
      body: JSON.stringify({
        content
      })
    })
    .then(helpers.checkStatus)
    .then(helpers.parseJSON)
    .then(data => {
      dispatch(addTodoSuccess(data.id, data.content));
    })
    .catch((e) => {debugger; dispatch(addTodoError(e))});
  };
}

/* mark all Todo async */
export const markAllRequest = () => {
  return {
    type: types.MARK_ALL_REQUEST
  }
}

export const markAllError = (error) => {
  return {
    type: types.MARK_ALL_ERROR,
    payload: error
  }
}

export const markAllSuccess = () => {
  return {
    type: types.MARK_ALL_SUCCESS
  }
}

export const markAll = () => {
  return (dispatch, getState) => {
    dispatch(markAllRequest());
    fetch('/api/rest/MarkAll', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("tokenInfo")
      }
    })
    .then(helpers.checkStatus)
    .then(
      dispatch(markAllSuccess())
    )
    .catch((e) => {dispatch(markAllError(e))});
  };
}

/* toggle Todo */
export const toggleTodoRequest = () => {
  return {
    type: types.TOGGLE_TODO_REQUEST
  }
}

export const toggleTodoError = (error) => {
  return {
    type: types.TOGGLE_TODO_ERROR,
    payload: error
  }
}

export const toggleTodoSuccess = (id) => {
  return {
    type: types.TOGGLE_TODO_SUCCESS,
    payload: {
      id
    }
  }
}

export const toggleTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(toggleTodoRequest());
    fetch('/api/rest/ToggleTodo', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("tokenInfo")
      },
      body: JSON.stringify({
        id
      })
    })
    .then(helpers.checkStatus)
    .then(dispatch(toggleTodoSuccess(id)))
    .catch((e) => {debugger; dispatch(toggleTodoError(e))});
  };
}

/* save Todo */
export const saveTodoRequest = () => {
  return {
    type: types.SAVE_TODO_REQUEST
  }
}

export const saveTodoError = (error) => {
  return {
    type: types.SAVE_TODO_ERROR,
    payload: error
  }
}

export const saveTodoSuccess = (id, content) => {
  return {
    type: types.SAVE_TODO_SUCCESS,
    payload: {
      id,
      content
    }
  }
}

export const saveTodo = (id, content) => {
  return (dispatch, getState) => {
    dispatch(saveTodoRequest());
    fetch('/api/rest/UpdateItem', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("tokenInfo")
      },
      body: JSON.stringify({
        id,
        content
      })
    })
    .then(helpers.checkStatus)
    .then(data => {
      dispatch(saveTodoSuccess(id, content));
    })
    .catch((e) => {debugger; dispatch(saveTodoError(e))});
  };
}

/* remove Todo */
export const removeTodoRequest = () => {
  return {
    type: types.REMOVE_TODO_REQUEST
  }
}

export const removeTodoError = (error) => {
  return {
    type: types.REMOVE_TODO_ERROR,
    payload: error
  }
}

export const removeTodoSuccess = (id) => {
  return {
    type: types.REMOVE_TODO_SUCCESS,
    payload: {
      id
    }
  }
}

export const removeTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(removeTodoRequest());
    fetch('/api/rest/RemoveItem', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("tokenInfo")
      },
      body: JSON.stringify({
        id
      })
    })
    .then(helpers.checkStatus)
    .then(dispatch(removeTodoSuccess(id)))
    .catch((e) => {debugger; dispatch(removeTodoError(e))});
  };
}

/* clear Completed */
export const clearCompletedRequest = () => {
  return {
    type: types.CLEAR_COMPLETED_REQUEST
  }
}

export const clearCompletedError = (error) => {
  return {
    type: types.CLEAR_COMPLETED_ERROR,
    payload: error
  }
}

export const clearCompletedSuccess = () => {
  return {
    type: types.CLEAR_COMPLETED_SUCCESS
  }
}

export const clearCompleted = () => {
  return (dispatch, getState) => {
    dispatch(clearCompletedRequest());
    fetch('/api/rest/RemoveCompleted', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("tokenInfo")
      }
    })
    .then(helpers.checkStatus)
    .then(
      dispatch(clearCompletedSuccess())
    )
    .catch((e) => {dispatch(clearCompletedError(e))});
  };
}
