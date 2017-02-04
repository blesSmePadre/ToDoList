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

const AddTodo = connect(null, mapDispatchToProps)(AddTodoForm);

export default AddTodo;
