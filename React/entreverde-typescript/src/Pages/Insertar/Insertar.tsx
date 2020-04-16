import React, { Component } from 'react'
import './insertar.css'

class Insertar extends Component {
   /*insertar paciente requiere: Nombre:string, ApellidoPaterno:string, ApellidoMaterno:string, telefono:string
   FechaNacimiento:string, FechaInscripcion:string */
  render () {
    return <div>
      <h3>Insertar:</h3>
      <form id='propsInsert'className='form'>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Nombre y Apellidos</span>
          </div>
          <input type='text' aria-label='Nombre' className='form-control' placeholder='Nombre' />
          <input type='text' aria-label='ApellidoPaterno' className='form-control' placeholder='Apellido Paterno' />
          <input type='text' aria-label='ApellidoMaterno' className='form-control' placeholder='Apellido Materno'/>
        </div>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Telefono</span>
          </div>
          <input type='text' aria-label='Telefono' className='form-control'></input>
        </div>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Fecha de Nacimiento</span>
          </div>
          <input type='text' aria-label='DiaFN' className='form-control' placeholder='Día'></input>
          <input type='text' aria-label='MesFN' className='form-control' placeholder='Mes'></input>
          <input type='text' aria-label='AñoFN' className='form-control' placeholder='Año'></input>
        </div>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Fecha Inscripcion</span>
          </div>
          <input type='text' aria-label='DiaFI' className='form-control' placeholder='Día'></input>
          <input type='text' aria-label='MesFI' className='form-control' placeholder='Mes'></input>
          <input type='text' aria-label='AñoFI' className='form-control' placeholder='Año'></input>
        </div>
        <button type='button' className='btn btn-outline-secondary'>Enviar</button>
      </form>
    </div>
  }
}

export default Insertar