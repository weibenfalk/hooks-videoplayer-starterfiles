import React from 'react';
import WbnPlayer from './WbnPlayer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WbnPlayer} />
      <Route exact path="/:activeVideo" component={WbnPlayer} />
    </Switch>
  </BrowserRouter>
)

export default App;