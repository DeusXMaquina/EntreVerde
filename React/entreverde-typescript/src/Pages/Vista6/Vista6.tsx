import React, { Component } from 'react'
import MainTable from '../../Components/MainTable/MainTable'

class Vista6 extends Component {
  
  render () {
    return <div>
      <h3>Mes con mas terapias:</h3>
      <MainTable reporte={4} />
    </div>
  }
}

export default Vista6