import React, { Component } from 'react'
import MainTable from '../../Components/MainTable/MainTable'

class Vista1 extends Component {
  render() {
    return <div>
      Tabla de Informacion sobre los pacientes:
        <MainTable reporte={1} />
    </div>
  }
}

export default Vista1