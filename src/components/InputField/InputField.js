import React from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => {
  const { label, type, placeholder, value, onChange } = props;
  return (
    <div className="control full">
      {label && <label>{label}</label>}
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputField;