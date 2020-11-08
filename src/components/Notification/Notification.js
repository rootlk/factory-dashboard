import React from 'react';
import PropTypes from 'prop-types';

const Notification = (props) => {
  const { type, msg } = props;
  return (
    <div className={`notification ${type} is-light`}>
      {msg}
    </div>
  )
};

Notification.propTypes = {
  type: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired
};

export default Notification;