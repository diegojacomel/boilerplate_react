// Modules
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Container from '../../components/Container/Container';
import IsLoading from '../../components/IsLoading/IsLoading';

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
                    <IsLoading
                        isLoading={true}
                    />
                </Container>
            </HomeWrapper>
        );
    }
}

export default Home;