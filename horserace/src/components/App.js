import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Race from './Race'
import Login from './Login'
import '../App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/race'>
            <Race />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
