import { connect } from 'react-redux';
import { toggleTodo, editTodo, saveTodo, removeTodo } from '../actions';
import TodoList from '../components/TodoList';
import * as types from '../constants/FilterTypes';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case types.SHOW_ALL:
      return todos;s
    case types.SHOW_COMPLETED:
      return todos.filter(item => item.completed);
    case types.SHOW_ACTIVE:
      return todos.filter(item => !item.completed);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
    onTodoDoubleClick: (id) => {
      dispatch(editTodo(id));
    },
    onTodoEnterKeyPress: (id, content) => {
      dispatch(saveTodo(id, content));
    },
    onTodoRemoveClick: (id) => {
      dispatch(removeTodo(id));
    }
  }
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
