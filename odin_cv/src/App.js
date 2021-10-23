import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Loading from './containers/Loading/Loading';

const Home = React.lazy(() => import('./containers/Home/Home'));
const Preview = React.lazy(() => import('./containers/Preview/Preview'));

require('./App.css');
require('./Variables.css');

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <React.Suspense fallback={<Loading />}>
            <Route path="/preview" component={Preview} />
            <Route exact path="/" component={Home} />
          </React.Suspense>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
