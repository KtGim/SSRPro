import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

const App = () => {
    return (
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    )
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)