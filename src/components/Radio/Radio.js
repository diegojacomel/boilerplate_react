// Modules
import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import Label from '../../components/Label/Label';

const LabelToRadio = styled(Label)`
    font-size: 14px;
    display: flex;
    align-items: center;
`

const RadioStyled = styled('input')`
    display: flex;
    background: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.primary};
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    -webkit-appearance: none;
    outline: none;
    margin: 5px;
    &:checked {
        background: ${props => props.theme.colors.primary};
    }
`

const Radio = ({ id, name, value, parentValue, disabled, label, ...rest }) => (
    <LabelToRadio>
        <RadioStyled
            type="radio"
            id={id}
            name={name}
            value={value}
            disabled={disabled}
            //checked={value === parentValue}
            {...rest}
        />
        {label}
    </LabelToRadio>
)

Radio.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool
}

Radio.defaultProps = {
    label: 'Label',
    id: '',
    name: '',
    value: '',
    onChange: () => {},
    onBlur: () => {},
    disabled: false
}

export default Radio;
