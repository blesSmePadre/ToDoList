import React, { PropTypes } from 'react';

const Link = ({active, children, onClick}) => {
  return (
    <span className={active ? 'todo-item-filter-active btn btn-default' : 'btn btn-default'}  
      onClick={e => {
        e.preventDefault();
        onClick();
      }}> {children} </span>
   )
}


Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link;
