// Module
import React, { Component } from 'react';
import styled from 'styled-components';
import CustomScroll from 'react-custom-scroll';
import PropTypes from 'prop-types';

// Components
import Input from '../Input/Input';

// Styles custom scroll
import './AutoComplete.css';

const Wrapper = styled('div')`
    height: 35px;
`

const AutoCompleteWrapper = styled('div')`
    display: block;
    position: relative;
    width: 100%;
    input[type='text'] {
        border-radius: ${props => !props.showOptions ? '5px' : '5px 5px 0 0'};
    }
`

const AutoCompleteStyled = styled('div')`
    position: absolute;
    width: 100%;
`

const ResponseWrapper = styled('div')`
    border-top: none;
    position: relative;
    width: 100%;
    max-height: 200px;
`

const ResponseItemWrapper = styled('button')`
    display: block;
    list-style-type: none;
    padding: 10px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #cccccc;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
    background: none;
    text-align: left;
    outline: none;
    background: #ffffff;
    font-size: 14px;
    color: #333333;
    cursor: pointer;
    &:first-child {
        border-top: none;
    }
    &:hover {
        background: #f2f2f2;
    }
`

class AutoComplete extends Component {
    state = {
        filtered: this.props.arrayContent,
        typed: '',
        itemSelected: '',
        showOptions: false
    }

    static propTypes = {
        arrayContent: PropTypes.array
    }

    static defaultProps = {
        arrayContent: []
    }

    handleChange = (value) => {
        const { props: { arrayContent } } = this;

        if (value && value.length && arrayContent && arrayContent.length) {
            const filtered = arrayContent.filter(x => x.toLowerCase().indexOf(value.toLowerCase()) !== -1);

            this.setState({
                filtered,
                typed: value
            })
        } else {
            this.setState({
                filtered: arrayContent,
                typed: value
            })
        }
    }

    selectItem = (itemSelected) => {
        this.setState({
            itemSelected,
            typed: itemSelected
        })
    }

    handleFocus = () => {
        this.setState({
            showOptions: true
        })
    }

    handleBlur = () => {
        setTimeout(() => {
            this.setState({
                showOptions: false
            })
        }, 100)
    }

    render() {
        const { state, props: { arrayContent, ...rest } } = this;

        return (
            <Wrapper>
                <AutoCompleteWrapper showOptions={state.showOptions}>
                    <AutoCompleteStyled>
                        <Input
                            type="text"
                            placeholder="AutoComplete"
                            onChange={(e) => this.handleChange(e.target.value)}
                            onFocus={() => this.handleFocus()}
                            onBlur={() => this.handleBlur()}
                            value={state.typed}
                            arrayContent={arrayContent}
                            {...rest}
                        />
                        {state.showOptions
                            ?
                            <CustomScroll
                                heightRelativeToParent="calc(100% - 20px)"
                            >
                                <ResponseWrapper>
                                    {state.filtered && state.filtered.length
                                        ?
                                        state.filtered.map((res, index) => (
                                            <ResponseItemWrapper
                                                key={index}
                                                value={res}
                                                onClick={(e) => this.selectItem(e.target.value)}
                                            >
                                                {res}
                                            </ResponseItemWrapper>
                                        ))
                                        :
                                        null
                                    }
                                </ResponseWrapper>
                            </CustomScroll>
                            :
                            null
                        }
                    </AutoCompleteStyled>
                </AutoCompleteWrapper>
            </Wrapper>
        )
    }
}

export default AutoComplete;