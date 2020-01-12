import React , {Component} from 'react';

import Component3 from './functional/Component3';
import Component2 from './functional/Component2';
import Container1 from './containers/Container1';

import { Router, Route, Switch} from 'react-router';
import Header from './containers/Header';
import History from './utils/History';

class Routes extends Component{
    render(){
        return(
            <div>
                <Router history={History}>
                    <div>
                        <Header/>
                        <Switch>
                        <Route exact path='/' component={Container1}/>
                        <Route path='/container1' component={(props)=><Container1 {...props}/>}/>
                        <Route path='/component2' component={Component2}/>
                        <Route path='/component3' component={Component3}/>
                        </Switch>
                    </div>
                </Router>
                
            </div>
        )
    }
}

export default Routes;