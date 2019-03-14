/* Modules */
import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as ReactGA from 'react-ga';

/* Components */
import routerComponents from './routerComponent'

class MyRouter extends Component {
    state = {}

    render () {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={routerComponents['Home']} />
                </Switch>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        menuReducer: state.menu,
        contextReducer: state.context,
    }
}

export function fireTracking(nextState) {
    const { pathname } = nextState.location
    ReactGA.pageview(pathname)
}

export default withRouter(connect(mapStateToProps)(MyRouter));