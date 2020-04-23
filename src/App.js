import React, { Component } from 'react';
import Games_table from './components/TableView/Games';
import Games_card from './components/CardView/Games';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
    
    render () {
        
        return (
            <div> 
            <div className="container-fluid">
            <Switch>
            <Route path="/" exact component={Games_table} />
            <Route path="/cardview" exact component={Games_card} />
            </Switch>
            </div>
            </div>
    );
  }  
}

export default App;