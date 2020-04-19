import React, { Component } from 'react'
import MainTable from '../../Components/MainTable/MainTable'
import './vista2.css'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class Vista2 extends Component <{}, {id:number}>{

  state= {
    id: 0
  }
  render() {
    const obtenerID = () => {
      var domElement:any =document.getElementById('idPaciente') ? document.getElementById('idPaciente') : null
      this.setState({id:Number(domElement.value)})
    }
    return <Router>
      <h4>Por favor ingresa el nombre del paciente que deseas buscar:</h4>
      <form>
        <div className='form-now col'>
          <input id='idPaciente' type='text' className='form-control' placeholder='Nombre'></input>
        </div>
        <Link className='btn btn-outline-primary lg-btn' type='button' onClick={obtenerID} to='/info'>Buscar</Link>
      </form>
      <Switch>
        <Route path='/info'>
          <MainTable idPaciente={this.state.id} id={1} />
        </Route>
      </Switch>
    </Router>
  }
}

export default Vista2