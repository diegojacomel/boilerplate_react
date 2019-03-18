// Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import Label from '../Label/Label';
import Icon from '../Icon/Icon';

const LabelToCheckbox = styled(Label)`
    font-size: 14px;
    display: flex;
    align-items: center;
    position: relative;
`

const CheckboxStyled = styled('input')`
    display: flex;
    background: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.primary};
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 3px;
    -webkit-appearance: none;
    outline: none;
    margin: 5px;
    + svg {
        display: none;
    }
    &:checked {
        + svg {
            display: block;
            position: absolute;
            left: 8px;
            top: 8px;
            width: 12px;
            height: 12px;
            fill: ${props => props.theme.colors.primary};       
        }
    }
`

const Checkbox = ({ label, id, name, value, disabled, ...rest }) => (
    <LabelToCheckbox>
        <CheckboxStyled
            type="checkbox"
            id={id}
            name={name}
            value={value}
            disabled={disabled}
            {...rest}
        />
        <Icon tag="checkmark" />
        {label}
    </LabelToCheckbox>
)

Checkbox.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    disabled: PropTypes.bool
}

Checkbox.defaultProps = {
    id: '',
    name: '',
    disabled: false
}

export default Checkbox;