// Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

// Components
import Icon from '../Icon/Icon';

const InputWrapper = styled('div')`
    position: relative;
    width: 100%;
`

const InputStyled = styled(InputMask)`
    &[type='text'],
    &[type='email'],
    &[type='phone'] {
        display: inline-block;
        outline: none;
        padding: ${props => props.icon === undefined ? '8px 12px' : '8px 12px 8px 35px'};
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #cccccc;
        width: 100%;
        box-sizing: border-box;
    }
`

const IconStyled = styled('div')`
    position: absolute;
    color: #cccccc;
    left: 10px;
    top: 10px;
    svg {
        fill: #666666;
    }
`

const MessageValidation = styled('div')`
    font-size: 12px;
    color: #d30;
`

const Input = ({ icon, type, name, onChange, onBlur, onKeyUp, placeholder, value, disabled, id, mask, errors, touched, ...rest }) => (
    <InputWrapper {...rest}>
        {icon
            ?
            <IconStyled>
                <Icon
                    tag={icon}
                />
            </IconStyled>
            :
            null
        }
        <InputStyled
            icon={icon}
            type={type}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            onKeyUp={onKeyUp}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            id={id}
            mask={mask}
            {...rest}
        />
        {errors && touched &&
            <MessageValidation>
                {errors}
            </MessageValidation>
        }
    </InputWrapper>
)

Input.propTypes = {
    icon: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
}

Input.defaultProps = {
    icon: undefined,
    type: 'text',
    onChange: () => {},
    onBlur: () => {},
    onKeyUp: () => {},
    placeholder: 'Digite um texto',
    disabled: false
}

export default Input;