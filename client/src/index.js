import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Component } from 'react';
import './index.css';
import './style.css';
import './theme.css';
import App from './App';
import About from './pages/About';

class Routing extends Component {
  render() {
    return (
    <Router>
        <div>
          <nav class="navbar bg-primary navbar-light" >
            <div class="container d-flex justify-content-center" > <a class="navbar-brand"><Link to={'/'} className="nav-link">Maptivist</Link></a> </div>
          </nav>
          <Switch>
              <Route exact path='/' component={App} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routing;

ReactDOM.render(<Routing />, document.getElementById('root'))
