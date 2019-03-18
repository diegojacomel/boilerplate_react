/* Modules */
import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

/* Components */
import routerComponents from './routerComponent'

class MyRouter extends Component {
    state = {}

    render () {
        return (
            <Fragment>
                <Switch>
                    {routerComponents.map((router, indexRoute) => (
                        <Route key={indexRoute} exact path={router.route} component={router.component} />
                    ))}
                </Switch>
            </Fragment>
        )
    }
}

export default withRouter(connect()(MyRouter));