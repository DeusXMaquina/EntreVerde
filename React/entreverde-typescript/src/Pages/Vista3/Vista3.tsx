import React, { Component } from 'react'
import MainTable from '../../Components/MainTable/MainTable'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class Vista3 extends Component <{}, {alumno:string}> {
  
  state = {
    alumno: ''
  }
  render () {
      const obtenerAlumno = () => {
        var domElement:any =document.getElementById('nombrePaciente') ? document.getElementById('nombrePaciente') : null
        this.setState({alumno:domElement.value})
      }
    return <Router>
         <h4>Por favor ingresa el nombre del paciente que deseas buscar:</h4>
      <form>
        <div className='form-now col'>
          <input id='nombrePaciente' type='text' className='form-control' placeholder='Nombre'></input>
        </div>
        <Link className='btn btn-outline-primary lg-btn' type='button' onClick={obtenerAlumno} to='/info'>Buscar</Link>
      </form>
      <Switch>
        <Route path='/info'>
          <MainTable alumno={this.state.alumno} />
        </Route>
      </Switch>
    </Router>
  }
}

export default Vista3