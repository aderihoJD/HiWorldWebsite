import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

ReactDOM.render(<Router history={history}>
                    <App history={history}/>
                </Router>,
    document.getElementById('root'));
registerServiceWorker();
