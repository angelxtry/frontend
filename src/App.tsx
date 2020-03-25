import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import TodoApp from './routes/TodoApp';
import Home from './routes/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={TodoApp} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
