import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

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
}

export const setVisibilityFilter = (filter) => {
 return {
   type: types.SET_VISIBILITY_FILTER,
   payload: filter
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

export const editTodo = (id) => {
    return {
      type: types.EDIT_TODO,
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

export const markAll = () => {
  return {
    type: types.MARK_ALL
  }
}
