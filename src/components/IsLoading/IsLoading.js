// Modules
import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IsLoadingWrapper = styled('div')`
    display: flex;
    justify-content: ${props => props.centerIcon ? 'center' : null};
    height: 70px;
`

const StyledSpinner = styled.svg`
    position: absolute;
    animation: rotate 2s linear infinite;
    width: 50px;
    height: 50px;
    margin: ${props => props.theme.spacing.sm};
    
    & .path {
        stroke: ${({ theme, color }) => theme.colors[color]};
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }
    
    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    }
`;

const IsLoading = ({ isLoading, centerIcon, color }) => (
    <Fragment>
        {isLoading
            ?
            <IsLoadingWrapper centerIcon={centerIcon} id="testIsLoading">
                <StyledSpinner viewBox="0 0 50 50" isLoading={isLoading} color={color} id="testIsLoadingSpinner">
                    <circle
                        className="path"
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        strokeWidth="5"
                    />
                </StyledSpinner>
            </IsLoadingWrapper>
            :
            null
        }
    </Fragment>
)

IsLoading.propTypes = {
    isLoading: PropTypes.bool,
    centerIcon: PropTypes.bool,
    color: PropTypes.string
}

IsLoading.defaultProps = {
    isLoading: false,
    centerIcon: true,
    color: 'primary'
}

export default IsLoading;