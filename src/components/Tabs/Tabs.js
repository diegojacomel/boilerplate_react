// Modules
import React, { Component } from 'react';
import styled from 'styled-components';

const TabsWrapper = styled('div')`
`

const TabItem = styled('button')`
    display: inline-block;
    border: none;
    background: ${({ index, indexProp }) => index !== indexProp ? '#eeeeee' : '#cccccc'};
    padding: 8px 12px;
    margin-left: 15px;
    font-family: "Open Sans", "Segoe UI", "Roboto";
    font-size: 16px;
    outline: none;
    margin-bottom: ${({ index, indexProp }) => index !== indexProp ? '-1px' : '0'};;
    cursor: pointer;
    &:first-child {
        margin-left: 0;
    }
`

const DescriptionItem = styled('div')`
    border: 1px solid #cccccc;
    border-radius: 0 10px 10px;
    min-width: 280px;
    max-width: 100%;
    padding: 20px;
`

class Tabs extends Component {
    state = {
        content: this.props.arrayTabs[0],
        active: 0
    }

    handleTab = (tab, index) => {
        this.setState({
            content: tab,
            active: index
        })
    }

    render() {
        const { state, props: { arrayTabs } } = this;

        return (
            <TabsWrapper>
                {arrayTabs.map((tab, index) => (
                    <TabItem
                        key={index}
                        value={tab}
                        onClick={() => this.handleTab(tab, index)}
                        index={state.active}
                        indexProp={index}
                    >
                        {tab.title}
                    </TabItem>
                ))}
                {!!state.content
                    ?
                    <DescriptionItem>
                        {state.content.description}
                    </DescriptionItem>
                    :
                    null
                }
            </TabsWrapper>
        )
    }
}

export default Tabs;