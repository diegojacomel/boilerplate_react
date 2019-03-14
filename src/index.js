// IE
import 'core-js/es6/map'; // for IE old browsers
import 'core-js/es6/set'; // for IE old browsers
import 'raf/polyfill'; // for IE old browsers
import 'babel-polyfill'; // for IE old browsers

// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'; // SAGA
import rootReducers from './redux/rootReducers';
import rootSagas from './redux/rootSagas';

// Styles
import { ThemeProvider } from 'styled-components';
import { primaryTheme } from './styles/themes';

// Router
import { HashRouter } from 'react-router-dom';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, {}, composeEnhancers(applyMiddleware(sagaMiddleware)));

// run the saga
sagaMiddleware.run(rootSagas);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <ThemeProvider theme={primaryTheme}>
                <App />
            </ThemeProvider>
        </HashRouter>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
