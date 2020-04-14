import React, { Component } from 'react'
import MainTable from '../../Components/MainTable/MainTable'

class Vista6 extends Component {
  
  render () {
    return <div>
      <h3>Enfermedad mas comun:</h3>
      <MainTable reporte={5} />
    </div>
  }
}

export default Vista6