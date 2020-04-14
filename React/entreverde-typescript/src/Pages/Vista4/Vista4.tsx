import React, { Component } from 'react'
import MainTable from '../../Components/MainTable/MainTable'

class Vista4 extends Component {
  
  render () {
    return <div>
      <h3>Terapeuta con mas terapias:</h3>
      <MainTable reporte={2} />
    </div>
  }
}

export default Vista4