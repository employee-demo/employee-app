import React from 'react';
import{Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './modules/Home';
import Employee from './modules/Employee';
import NewEmployee from './modules/NewEmployee';
import EditEmployee from './modules/EditEmployee';

const App=()=> {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/employee" component={Employee} />
      <Route path="/newemployee" component={NewEmployee} />
      <Route path="/editemployee/:id" component={EditEmployee} />
      </Switch>
      </>
  );
}

export default App;