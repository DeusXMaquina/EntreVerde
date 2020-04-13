import React from 'react';
import './App.css'
import Vista1 from './Pages/Vista1/Vista1'
import Vista2 from './Pages/Vista2/Vista2'
import Vista3 from './Pages/Vista3/Vista3'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='/'>EntreVerde</a>
          <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'><a href='/Vista1' className='btn btn-outline-primary'>Vista 1</a></li>
              <li className='nav-item active'><a href='/Vista2' className='btn btn-outline-primary'>Vista 2</a></li>
              <li className='nav-item active'><a href='/Vista3' className='btn btn-outline-primary'>Vista 3</a></li>
              <li className='nav-item active'><a href='/Vista4' className='btn btn-outline-primary'>Vista 4</a></li>
              <li className='nav-item active'><a href='/Vista5' className='btn btn-outline-primary'>Vista 5</a></li>
              <li className='nav-item active'><a href='/Vista6' className='btn btn-outline-primary'>Vista 6</a></li>
              <li className='nav-item active'><a href='/Vista7' className='btn btn-outline-primary'>Vista 7</a></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path='/Vista1' component={Vista1}/>
        <Route path='/Vista2' component={Vista2}/>
        <Route path='/Vista3' component={Vista3}/>
      </Switch>
    </Router>
  )
}

export default App;
