import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import Price from './Price';
import NotFound from './NotFound';

const App = () => <div>
    <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route path={'/price'} component={Price}/>
        <Route path={'*'} component={NotFound}/>
    </Switch>
</div>

export default App