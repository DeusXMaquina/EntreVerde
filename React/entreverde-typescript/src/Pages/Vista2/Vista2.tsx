import React, { Component } from 'react'
import MainTable from '../../Components/MainTable/MainTable'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class Vista2 extends Component <{}, {nombre:string}>{

  state= {
    nombre: ''
  }
  render() {
    const obtenerNombre = () => {
      var domElement:any =document.getElementById('nombrePaciente') ? document.getElementById('nombrePaciente') : null
      this.setState({nombre:domElement.value})
    }
    return <Router>
      <h4>Por favor ingresa el nombre del paciente que deseas buscar:</h4>
      <form>
        <div className='form-now col'>
          <input id='nombrePaciente' type='text' className='form-control' placeholder='Nombre'></input>
        </div>
        <Link className='btn btn-outline-primary lg-btn' type='button' onClick={obtenerNombre} to='/info'>Buscar</Link>
      </form>
      <Switch>
        <Route path='/info'>
          <MainTable nombre={this.state.nombre} />
        </Route>
      </Switch>
    </Router>
  }
}

export default Vista2