// Modules
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import ProgressBar from '../../components/ProgressBar/ProgressBar';

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
                <ProgressBar
                    sqSize={250}
                    strokeWidth={15}
                    initialPercentage={0}
                    percentage={50}
                    color="primary"
                />
            </HomeWrapper>
        );
    }
}

export default Home;