import AddTodoForm from '../components/AddTodoForm';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (content) => {
      dispatch(addTodo(content));
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isMarkAllEnabled: state.todos.length > 0
  }
}

const AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodoForm);

export default AddTodo;
