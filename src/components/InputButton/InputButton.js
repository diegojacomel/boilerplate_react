// Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import Input from '../Input/Input';
import Button from '../Button/Button';

const InputButtonWrapper = styled('div')`
    display: flex;
`

const InputStyled = styled(Input)`
    border-radius: ${props => props.side === "left" ? props.theme.rounded.mdRight + ' !important' : props.theme.rounded.mdLeft + ' !important'};
    order: ${props => props.side === "left" ? 1 : 0};
`

const InputButton = ({ side, inputType, inputName, inputId, inputValue, inputPlaceholder, inputDisabled, inputChange, inputKeyUp, inputBlur, typeButton, buttonColor, buttonClick, buttonSubmit, iconButton, iconButtonColor, iconButtonSize, ...rest }) => (
    <InputButtonWrapper>
        <InputStyled
            type={inputType}
            name={inputName}
            id={inputId}
            value={inputValue}
            placeholder={inputPlaceholder}
            disabled={inputDisabled}
            side={side}
            onChange={inputChange}
            onKeyUp={inputKeyUp}
            onBlur={inputBlur}
            {...rest}
        />
        <Button
            type={typeButton}
            color={buttonColor}
            rounded={side === "left" ? "mdLeft" : "mdRight"}
            onClick={buttonClick}
            onSubmit={buttonSubmit}
            icon={iconButton}
            iconColor={iconButtonColor}
            iconSize={iconButtonSize}
        >
            Button
        </Button>
    </InputButtonWrapper>
)

InputButton.propTypes = {
    side: PropTypes.string,
    inputType: PropTypes.string,
    inputName: PropTypes.string,
    inputId: PropTypes.string,
    inputValue: PropTypes.any,
    inputPlaceholder: PropTypes.string,
    inputDisabled: PropTypes.bool,
    inputChange: PropTypes.func,
    inputKeyUp: PropTypes.func,
    inputBlur: PropTypes.func,
    typeButton: PropTypes.string,
    buttonColor: PropTypes.string,
    buttonClick: PropTypes.func,
    buttonSubmit: PropTypes.func,
    iconButton: PropTypes.string,
    iconButtonColor: PropTypes.string,
    iconButtonSize: PropTypes.string
}

InputButton.defaultProps = {
    side: 'right',
    inputType: 'text',
    inputName: '',
    inputId: '',
    inputPlaceholder: 'Digite um texto',
    inputDisabled: false,
    inputChange: () => {},
    inputKeyUp: () => {},
    inputBlur: () => {},
    typeButton: 'button',
    buttonColor: 'primary',
    buttonClick: () => {},
    buttonSubmit: () => {},
    iconButton: '',
    iconButtonColor: 'white',
    iconButtonSize: 'none'
}

export default InputButton;