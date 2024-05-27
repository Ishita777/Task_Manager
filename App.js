import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthState from './context/AuthContext';
import TaskState from './context/TaskContext';
import PrivateRoute from './utils/PrivateRoute';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TaskList from './components/Tasks/TaskList';

const App = () => {
  return (
    <AuthState>
      <TaskState>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/" component={TaskList} />
            </Switch>
          </div>
        </Router>
      </TaskState>
    </AuthState>
  );
};

export default App;
