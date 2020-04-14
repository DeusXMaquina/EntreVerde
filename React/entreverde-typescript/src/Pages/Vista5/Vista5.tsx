import React, { Component } from 'react'
import MainTable from '../../Components/MainTable/MainTable'

class Vista5 extends Component {
  
  render () {
    return <div>
      <h3>Caballo con mas terapias:</h3>
      <MainTable reporte={3} />
    </div>
  }
}

export default Vista5