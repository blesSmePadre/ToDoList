import { connect } from 'react-redux';
import { markAll } from '../actions';
import MarkAll from '../components/MarkAll';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(markAll());
    }
  }
}

export default connect(null, mapDispatchToProps)(MarkAll);
