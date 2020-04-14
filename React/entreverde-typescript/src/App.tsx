import React from 'react';
import './App.css'
import Vista1 from './Pages/Vista1/Vista1'
import Vista2 from './Pages/Vista2/Vista2'
import Vista3 from './Pages/Vista3/Vista3'
import Vista4 from './Pages/Vista4/Vista4'
import Vista5 from './Pages/Vista5/Vista5'
import Vista6 from './Pages/Vista6/Vista6'
import Vista7 from './Pages/Vista7/Vista7'
import Insertar from './Pages/Insertar/Insertar'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='/Home'>EntreVerde</a>
          <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'><a href='/Vista1' className='btn btn-outline-primary'>Vista 1</a></li>
              <li className='nav-item active'><a href='/Vista2' className='btn btn-outline-primary'>Vista 2</a></li>
              <li className='nav-item active'><a href='/Vista3' className='btn btn-outline-primary'>Vista 3</a></li>
              <li className='nav-item active'><a href='/Vista4' className='btn btn-outline-primary'>Vista 4</a></li>
              <li className='nav-item active'><a href='/Vista5' className='btn btn-outline-primary'>Vista 5</a></li>
              <li className='nav-item active'><a href='/Vista6' className='btn btn-outline-primary'>Vista 6</a></li>
              <li className='nav-item active'><a href='/Vista7' className='btn btn-outline-primary'>Vista 7</a></li>
              <li className='nav-item active'><a href='/Insertar' className='btn btn-outline-primary'>Insertar</a></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path='/Home'>
          <h1 className='intro'>Bienvenido</h1>
        </Route>
        <Route path='/Vista1' component={Vista1}/>
        <Route path='/Vista2' component={Vista2}/>
        <Route path='/Vista3' component={Vista3}/>
        <Route path='/Vista4' component={Vista4}/>
        <Route path='/Vista5' component={Vista5}/>
        <Route path='/Vista6' component={Vista6}/>
        <Route path='/Vista7' component={Vista7}/>
        <Route path='/Insertar' component={Insertar}/>
      </Switch>
    </Router>
  )
}

export default App;
