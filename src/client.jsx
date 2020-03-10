import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';


function doRender() {
    const main = typeof document !== 'undefined' ? document.getElementById('reactele') : false;
    const renderOrHydrate = main && main.innerHTML.trim().length > 0 ? 'hydrate' : 'render';
    ReactDOM[renderOrHydrate](
        <ErrorBoundry>
            <Router>
                <App/>
            </Router>
        </ErrorBoundry>,
        main,
    );
}

doRender();
