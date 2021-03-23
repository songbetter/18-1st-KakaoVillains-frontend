import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Comment from './Pages/Comment/Comment';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/comment" component={Comment} />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
