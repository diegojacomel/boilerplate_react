// Modules
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import AutoComplete from '../../components/AutoComplete/AutoComplete';

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
                <AutoComplete
                    arrayContent={['Diego', 'Daniel', 'Neto', 'Vitor', 'Anderson', 'Russo', 'Karla', 'Luca', 'Pira']}
                />
            </HomeWrapper>
        );
    }
}

export default Home;