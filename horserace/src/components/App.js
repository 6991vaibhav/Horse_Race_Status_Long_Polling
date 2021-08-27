import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Race from './Race'
import Login from './Login'
import '../assets/styles/App.css'
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/' exact>
            <Redirect from="/" to="/login" />
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/race' exact>
            <Race />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
