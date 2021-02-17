import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import Preview from './containers/Preview/Preview';

require('./App.css');
require('./Variables.css');

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/preview" component={Preview} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
