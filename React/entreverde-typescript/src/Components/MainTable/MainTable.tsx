import React, { Component } from 'react'
import './MainTable.css'
import { IPacientes, IPaciente, ITerapeutas, IReporteTerapeuta, IReporteCaballo, IMes, IEnfermedad, IInfoTerapias } from './MainTableInterfaces'

class MainTable extends Component <{id?:number, terapeuta?:string, reporte?:number, alumnoID?:number, fecha?:{anio:number, mes:number, dia:number}, idPaciente?:number}> {
  
    state: Readonly<{paciente?:IPaciente, pacientes?:IPacientes[], terapeutas?:[ITerapeutas], InfoTerapias?:IInfoTerapias[],ReporteTerapeuta?:IReporteTerapeuta, ReporteCaballo?: IReporteCaballo, ReporteMes?:IMes, ReporteEnfermedad?:IEnfermedad}> = {
    }

    componentWillMount() {
      if (this.props.reporte === 1 ){
        fetch('https://localhost:44333/api/Vista1/GetPaciente')
        .then(res => res.json())
        .then(data => {this.setState({pacientes:data})})
      }
      if (this.props.reporte === 3) {
        fetch('https://localhost:44333/api/Vista5')
        .then(res => res.json())
        .then(data => {this.setState({ReporteCaballo:data})})
      }
      if (this.props.reporte === 4) {
        fetch('https://localhost:44333/api/Vista6')
        .then(res => res.json())
        .then(data => {this.setState({ReporteMes:data})})
      }
      if (this.props.reporte === 5) {
        fetch('https://localhost:44333/api/Vista7')
        .then(res => res.json())
        .then(data => {this.setState({ReporteEnfermedad:data})})
      }
      if (this.props.idPaciente !== 0 ) {
        fetch(`https://localhost:44333/api/Vista2/Get/${this.props.idPaciente}`)
        .then(res => res.json())
        .then (data => {this.setState({paciente:data})})
      }
      if (this.props.fecha?.anio !== 0) {
        fetch(`https://localhost:44333/api/Vista4/${this.props.fecha?.anio}/${this.props.fecha?.mes}/${this.props.fecha?.dia}`)
        .then(res => res.json())
        .then(data => {this.setState({ReporteTerapeuta:data})})
      }
      if (this.props.alumnoID !== 0) {
        fetch(`https://localhost:44333/api/Vista3/${this.props.alumnoID}`)
        .then(res => res.json())
        .then(data => {this.setState({InfoTerapias:data})})
      }
    }

    render () {
      const mapPaciente = () => {
        if (this.state.pacientes !== undefined)
          return this.state.pacientes.map( (paciente, index) =>{
            return <tr key={index}>
              <td >{paciente.Nombre}</td>
              <td >{paciente.Telefono}</td>
              <td >{paciente.FechaNacimiento}</td>
              <td >{paciente.FechaInscripcion}</td>
            </tr>
          })
      }

      const mapTerapias = () => {
        if (this.state.InfoTerapias !== undefined)
          return this.state.InfoTerapias.map( (terapia, index) => {
            return <tr key={index}>
              <td>{terapia.Terapeuta}</td>
              <td>{terapia.FechaTerapia}</td>
              <td>{terapia.Ejercicios}</td>
              <td>{terapia.Comportamientos}</td>
              <td>{terapia.Caballo}</td>
              <td>{terapia.Equipo}</td>
            </tr>
          })
      }
      const mainTableInfo = () => {
        if (this.props.reporte === 1){
        return <div className='card'>
          <table>
            <thead>
            <tr>
              <th className='card-header'>Nombre</th>
              <th className='card-header'>Telefono</th>
              <th className='card-header'>Fecha de Nacimiento</th>
              <th className='card-header'>Fecha Inscripcion</th>
            </tr>
            </thead>
            <tbody>
            {mapPaciente()}
            </tbody>
          </table>
        </div>
        }else if (this.props.reporte === 3) {
          return <div className='card'>
            <table>
              <thead>
                <tr>
                  <th className='card-header'>Nombre</th>
                  <th className='card-header'>numero de sesiones</th>
                  <th className='card-header'>Total terapias</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.ReporteCaballo?.Caballo}</td>
                  <td>{this.state.ReporteCaballo?.Sesiones}</td>
                  <td>{this.state.ReporteCaballo?.Terapias}</td>
                </tr>
              </tbody>
            </table>
          </div>
        } else if (this.props.reporte === 4) {
          return <div className='card'>
            <table>
              <thead>
                <tr>
                  <th className='card-header'>Mes</th>
                  <th className='card-header'>Numero de Terapias</th>
                  <th className='card-header'>Año</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.ReporteMes?.Mes}</td>
                  <td>{this.state.ReporteMes?.Terapias}</td>
                  <td>{this.state.ReporteMes?.Año}</td>
                </tr>
              </tbody>
            </table>
          </div>
        } else if (this.props.reporte === 5) {
          return <div className='card'>
            <table>
              <thead>
                <tr>
                  <th className='card-header'>Enfermedad</th>
                  <th className='card-header'>Numero de Pacientes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.ReporteEnfermedad?.Enfermedad}</td>
                  <td>{this.state.ReporteEnfermedad?.NumeroPacientes}</td>
                </tr>
              </tbody>
            </table>
          </div>
        } else if(this.props.id === 1) {
          return <div className='card'>
            <table>
              <thead>
                <tr>
                  <th className='card-header'>Nombre</th>
                  <th className='card-header'>Telefono</th>
                  <th className='card-header'>Fecha de Nacimiento</th>
                  <th className='card-header'>Contacto de Emergencia</th>
                  <th className='card-header'>Telefono de Contacto</th>
                  <th className='card-header'>Alergias</th>
                  <th className='card-header'>Medicamentos</th>
                  <th className='card-header'>Enfermedades</th>
                  <th className='card-header'>Observaciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.paciente?.Nombre}</td>
                  <td>{this.state.paciente?.Telefono}</td>
                  <td>{this.state.paciente?.FechaNacimiento}</td>
                  <td>{this.state.paciente?.NombreContactoEmergencia}</td>
                  <td>{this.state.paciente?.TelefonoContactoEmergencia}</td>
                  <td>{this.state.paciente?.Alergias}</td>
                  <td>{this.state.paciente?.Medicamentos}</td>
                  <td>{this.state.paciente?.Enfermedades}</td>
                  <td>{this.state.paciente?.Observaciones}</td>
                </tr>
              </tbody>
            </table>

          </div>
        }
        else if (this.props.id === 3) {
          return <div className='card'>
            <table>
              <thead>
                <tr>
                  <th className='card-header'>Nombre</th>
                  <th className='card-header'>numero de sesiones</th>
                  <th className='card-header'>Total terapias</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.ReporteTerapeuta?.Terapeuta}</td>
                  <td>{this.state.ReporteTerapeuta?.Sesiones}</td>
                  <td>{this.state.ReporteTerapeuta?.TotalTerapias}</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
        else if (this.props.id === 2) {
          return <div className='card'>
            <table> 
              <thead>
                <tr>
                <th className='card-header'>Terapeuta</th>
                  <th className='card-header'>Fecha</th>
                  <th className='card-header'>Ejercicios</th>
                  <th className='card-header'>Comportamiento</th>
                  <th className='card-header'>Caballo</th>
                  <th className='card-header'>Equipo</th>
                </tr>
              </thead>
              <tbody>
                {mapTerapias()}
              </tbody>
            </table>
          </div>
        } 
        return <h1>No Info</h1>
      }

      return mainTableInfo()
    }
}

export default MainTable