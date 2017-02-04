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

export default connect(null, mapDispatchToProps)(ClearCompleted);
