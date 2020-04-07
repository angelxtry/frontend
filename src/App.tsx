import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import TodoApp from './routes/TodoApp';
import Home from './routes/Home';
import Posts from './routes/Posts';
import PostDetail from './routes/PostDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={TodoApp} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id" component={PostDetail} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
