import React, { Component } from 'react'
import MainTable from '../../Components/MainTable/MainTable'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import './vista4.css'

class Vista4 extends Component <{}, {fecha:{anio:number, mes:number, dia:number}}> {
  state = {
    fecha: {
      anio: 0,
      mes: 0,
      dia:0
    }
  }
  render () {
    const obtenerFecha = () => {
      var domElement:any = document.getElementsByTagName('input') ? document.getElementsByTagName('input') : null
      this.setState({fecha:{
        anio: domElement[2].value,
        mes: domElement[1].value,
        dia: domElement[0].value
      }})
    }

    return <Router>
    <h4>Por favor ingresa el mes:</h4>

    <div className='input-group' id='fechaTerapia'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Fecha:</span>
          </div>
          <input type='text' aria-label='DiaFN' className='form-control' placeholder='Día'></input>
          <input type='text' aria-label='MesFN' className='form-control' placeholder='Mes'></input>
          <input type='text' aria-label='AñoFN' className='form-control' placeholder='Año'></input>
        </div>
      <Link className='btn btn-outline-primary lg-btn' type='button' onClick={obtenerFecha} to='/info'>Buscar</Link>

    <Switch>
      <Route path='/info'>
        <MainTable fecha={this.state.fecha} id={3} />
      </Route>
    </Switch>
  </Router>
  }
}

export default Vista4