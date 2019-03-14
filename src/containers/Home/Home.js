// Modules
import React, { Component } from 'react';

// Components
import Button from '../../components/Button/Button'; 

class Home extends Component {
    state = {}

    render() {
        return (
            <div>
                <Button color="primary" rounded="md">
                    Home
                </Button>
            </div>
        );
    }
}

export default Home;