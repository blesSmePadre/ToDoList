import { connect } from 'react-redux';
import { clearCompleted } from '../actions';
import ClearCompleted from '../components/ClearCompleted';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(clearCompleted());
    }
  }
}

const isClearAllEnabled = (todos) => {
  let isEnabled = false;
  todos.map((item) => {
    if (item.completed)
      isEnabled = true;
  });
  return isEnabled;
}

const mapStateToProps = (state) => {
  return {
    isEnabled: isClearAllEnabled(state.todos)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearCompleted);
