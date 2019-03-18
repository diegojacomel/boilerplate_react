// Modules
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import InputButton from '../../components/InputButton/InputButton';

const HomeWrapper = styled('main')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

class Home extends Component {
    state = {}

    render() {
        return (
            <HomeWrapper>
                <InputButton side="right" />
            </HomeWrapper>
        );
    }
}

export default Home;