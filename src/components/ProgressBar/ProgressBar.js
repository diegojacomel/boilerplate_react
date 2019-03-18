// Modules
import React, { Component } from 'react';
import styled from 'styled-components';

const ProgressBarStyled = styled('div')`
    display: block;
`

const CircleBgStyled = styled('circle')`
    fill: none;
    stroke: #dddddd;
    transition: all 0.5s;
`

const CircleProgressStyled = styled('circle')`
    fill: none;
    stroke: ${props => props.theme.colors[props.color]};
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: all 0.5s;
`

const CircleTextStyled = styled('text')`
    font-weight: bold;
    fill: ${props => props.theme.colors[props.color]};
    font-family: 'Open Sans';
    transition: all 0.5s;
    font-size: 30px;
`

class ProgressBar extends Component {
    state = {
        radius: (this.props.sqSize - this.props.strokeWidth) / 2,
        viewBox: `0 0 ${this.props.sqSize} ${this.props.sqSize}`,
        dashArray: ((this.props.sqSize - this.props.strokeWidth) / 2) * Math.PI * 2,
        dashOffset: (((this.props.sqSize - this.props.strokeWidth) / 2) * Math.PI * 2) - (((this.props.sqSize - this.props.strokeWidth) / 2) * Math.PI * 2) * this.props.initialPercentage / 100,
        newPercentage: 0
    }

    componentDidMount() {
        const { props: { percentage } } = this;

        for (let count = 0; count <= percentage; count++) {
            setTimeout(() => {
                this.increasePercentage(count);
                
                this.setState({
                    dashOffset: (((this.props.sqSize - this.props.strokeWidth) / 2) * Math.PI * 2) - (((this.props.sqSize - this.props.strokeWidth) / 2) * Math.PI * 2) * count / 100
                })
            }, 200)
        }
    }

    increasePercentage = (count) => {
        this.setState({
            newPercentage: count
        })
    }

    render() {
        const { state, props: { sqSize, strokeWidth, color } } = this;

        return (
            <ProgressBarStyled>
                <svg
                    width={sqSize}
                    height={sqSize}
                    viewBox={state.viewBox}
                >
                    <CircleBgStyled
                        cx={sqSize / 2}
                        cy={sqSize / 2}
                        r={state.radius}
                        strokeWidth={`${strokeWidth}px`}
                    />
                    <CircleProgressStyled
                        color={color}
                        cx={sqSize / 2}
                        cy={sqSize / 2}
                        r={state.radius}
                        strokeWidth={`${strokeWidth}px`}
                        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
                        style={{
                            strokeDasharray: state.dashArray,
                            strokeDashoffset: state.dashOffset
                        }}
                    />
                    <CircleTextStyled
                        x="50%"
                        y="50%"
                        dy=".3em"
                        textAnchor="middle"
                        color={color}
                    >
                        {`${state.newPercentage}%`}
                    </CircleTextStyled>
                </svg>
            </ProgressBarStyled>
        )
    }
} 

export default ProgressBar;