import React, { Component } from 'react';

export default function getDefaultValues(initialState, requiredFields) {
    return function Wrapper(WrappedComponent) {
        return class WrappedForm extends Component {
        state = {
            isFetching: false,
            data: initialState,
            errors: requiredFields,
        };

        handleInput = event => {
            const { value, name } = event.currentTarget;
            let errorsEmail = false;
            let errorsPhone = false;
            let errorsName = false;
            
            switch (name) {
                case 'email':
                    if (!(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))) {
                        errorsEmail = true;
                    } else {
                        errorsEmail = false;
                    }  
                    break;
                case 'phone':
                    if (value.length > 9) {
                        errorsPhone = false;
                    } else {
                        errorsPhone = true;
                    }  
                    break;
                case 'username':
                    if (value.length > 2) {
                        errorsName = false;
                    } else {
                        errorsName = true;
                    }  
                    break;
                default:
                    break;
            }
            // console.log(errorsEmail)
            this.setState(({ data, errors }) => ({
                data: {
                ...data,
                [name]: value.trim(),
                },
                errorsEmail,
                errorsPhone,
                errorsName,
                errors: {
                ...errors,
                [name]: '',
                },
            }));
        };
    
        handleSubmit = e => {
            e.preventDefault();
            const { data } = this.state;
            const isValid = Object.keys(data).reduce(
                (sum, item) => sum && this.validate(item, data[item]),
                true
            );
            if (isValid) {
              console.log(data);
            }
        };
    
        validate = (name, value) => {
            if (!value.trim()) {
            this.setState(
                ({ errors }) => ({
                errors: {
                    ...errors,
                    [name]: 'поле не должно быть пустым',
                },
                }),
                () => false
            );
            } else {
            return true;
            }
        };

        render() {
            return (
                <WrappedComponent
                    {...this.state}
                    {...this.props}
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                />
            );
        }
        };
    };
}