import { connect } from 'react-redux';
import React from 'react';

const getActiveItemsCount = (items) => {
  return items.reduce((count, item) => {
    return !item.completed ? ++count : count;
  }, 0);
}

const mapStateToProps = (state) => {
  return {
    count: getActiveItemsCount(state.todos)
  }
};

const Component = ({count}) => {
  return <span>{count}</span>
}

const ActiveItemsCount = connect(mapStateToProps)(Component);

export default ActiveItemsCount;
