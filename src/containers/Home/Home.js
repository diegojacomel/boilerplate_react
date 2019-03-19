// Modules
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Container from '../../components/Container/Container';

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
                <Container>
                    Home
                </Container>
            </HomeWrapper>
        );
    }
}

export default Home;