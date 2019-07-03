import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './index';
import FormWrapper from '../containers/FormWrapper';

class Form extends Component {

    render() {
        const {
            data: { username, email, phone },
            errors,
            handleInput,
            handleSubmit,
            errorsEmail,
            errorsPhone,
            errorsName,
        } = this.props;
        // const { errorsName, errorsPhone, errorsEmail } = error;
        const style = {borderColor : 'red'}
        return (
            <>
              <form onSubmit={handleSubmit}>
                  <Input
                  key="username"
                  value={username}
                  name="username"
                  style={errorsName ? style: null}
                  type='text'
                  onChange={handleInput}
                  placeholder="Логин"
                  error={errors.username}
                  required
                  />
                  <Input
                  key="phone"
                  value={phone}
                  name="phone"
                  style={errorsPhone ? style: null}
                  type='number'
                  onChange={handleInput}
                  placeholder="Телефон"
                  error={errors.phone}
                  required
                  />
                  <Input
                  key="email"
                  value={email}
                  style={errorsEmail ? style: null}
                  type="email"
                  name="email"
                  onChange={handleInput}
                  placeholder="Электронная почта"
                  error={errors.email}
                  required
                  />
                  <button type="submit" className="submitBtn">
                  Отправить форму
                  </button>
              </form>
            </>
        );
    }
}

Form.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    username: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

// export default FormWrapper(Form);


const initialState = {
    username: '',
    phone: '',
    email: '',
};

export default FormWrapper(initialState, initialState)(Form);
