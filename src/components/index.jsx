import React, { PureComponent } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  render() {
    const {
      name,
      error,
      labelClass,
      inputClass,
      placeholder,
      type,
      ...props
    } = this.props;
    return (
      <label
        className={cx('label', !!labelClass && labelClass)}
        htmlFor={`id-${name}`}
      >
        <span className="span">{placeholder}</span>
        <input
          className={cx(
            'input',
            !!inputClass && inputClass,
            !!error && 'error'
          )}
          type={type}
          name={name}
          id={`id-${name}`}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...props}
        />
        {!!error && <span className="errorText">{error}</span>}
      </label>
    );
  }
}

Input.defaultProps = {
  type: 'text',
  error: '',
  required: false,
  autoComplete: 'off',
  labelClass: '',
  inputClass: '',
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  labelClass: PropTypes.string,
  inputClass: PropTypes.string,
};

export default Input;
