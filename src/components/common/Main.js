import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../home/Home';
import Price from '../price/Price';
import NotFound from '../error/NotFound';

const Main = () => <div>
    <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route path={'/price'} component={Price}/>
        <Route path={'*'} component={NotFound}/>
    </Switch>
</div>

export default Main