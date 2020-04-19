import React, { Component } from 'react'
import MainTable from '../../Components/MainTable/MainTable'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class Vista4 extends Component <{}, {fecha:string}> {
  state = {
    fecha: ''
  }
  render () {
    const obtenerFecha = () => {
      var domElement:any =document.getElementById('mesTerapia') ? document.getElementById('mesTerapia') : null
      this.setState({fecha:domElement.value})
    }

    return <Router>
    <h4>Por favor ingresa el mes:</h4>
    <form>
      <div className='form-now col'>
          <input type='text' id='mesTerapia' className='form-control' placeholder='Mes'></input>
      </div>
      <Link className='btn btn-outline-primary lg-btn' type='button' onClick={obtenerFecha} to='/info'>Buscar</Link>
    </form>
    <Switch>
      <Route path='/info'>
        <MainTable fecha={this.state.fecha} />
      </Route>
    </Switch>
  </Router>
  }
}

export default Vista4