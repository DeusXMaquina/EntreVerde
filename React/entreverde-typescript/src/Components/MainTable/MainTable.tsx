import React, { Component } from 'react'
import './MainTable.css'
import { IPacientes, IPaciente, ITerapeutas, IAlumno, IReporteTerapeuta, IReporteCaballo, IMes, IEnfermedad } from './MainTableInterfaces'
import pacientesJSON from '../../JSON Test Files/tabla1.json'
import pacienteJSON from '../../JSON Test Files/tabla2.json'
import alumnoJSON from '../../JSON Test Files/tabla3.json'
import reporteTJSON from '../../JSON Test Files/tabla4.json'
import reporteCJSON from '../../JSON Test Files/tabla5.json'
import reporteMJSON from '../../JSON Test Files/tabla6.json'
import reporteEJSON from '../../JSON Test Files/tabla7.json'

class MainTable extends Component <{id?:number, terapeuta?:string, reporte?:number, alumnoID?:number}> {
  
    state: Readonly<{paciente?:IPaciente, pacientes?:IPacientes[], terapeutas?:[ITerapeutas], InfoTerapias?:{alumno:string, terapias:IAlumno[]},ReporteTerapeuta?:IReporteTerapeuta, ReporteCaballo?: IReporteCaballo, ReporteMes?:IMes, ReporteEnfermedad?:IEnfermedad}> = {
      pacientes: pacientesJSON.Pacientes,
      paciente: pacienteJSON,
      InfoTerapias: {
        alumno: alumnoJSON.Alumno,
        terapias: alumnoJSON.Terapias
      },
      ReporteTerapeuta: reporteTJSON,
      ReporteCaballo: reporteCJSON,
      ReporteMes:reporteMJSON,
      ReporteEnfermedad:reporteEJSON
    }

    render () {
      const mapPaciente = () => {
        if (this.state.pacientes !== undefined)
          return this.state.pacientes.map( (paciente, index) =>{
            return <tr key={index}>
              <td >{paciente.Nombre}</td>
              <td >{paciente.Telefono}</td>
              <td >{paciente.fechaNacimiento}</td>
              <td >{paciente.fechaInscripcion}</td>
            </tr>
          })
      }

      const mapTerapias = () => {
        if (this.state.InfoTerapias !== undefined)
          return this.state.InfoTerapias.terapias.map( (terapia, index) => {
            return <tr key={index}>
              <td>{terapia.Terapeuta}</td>
              <td>{terapia.fechaTerapia}</td>
              <td>{terapia.Ejercicios}</td>
              <td>{terapia.Comportamiento}</td>
              <td>{terapia.Caballo}</td>
              <td>{terapia.Equipo}</td>
              <td>{terapia.Observaciones}</td>
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
                  <td>{this.state.paciente?.fechaNacimiento}</td>
                  <td>{this.state.paciente?.contactoEmergencia}</td>
                  <td>{this.state.paciente?.telefonoEmergencia}</td>
                  <td>{this.state.paciente?.Alergias}</td>
                  <td>{this.state.paciente?.Medicamentos}</td>
                  <td>{this.state.paciente?.Enfermedades}</td>
                  <td>{this.state.paciente?.Observaciones}</td>
                </tr>
              </tbody>
            </table>

          </div>
        }
        else if (this.props.alumnoID === 1) {
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
                  <th className='card-header'>Observaciones</th>
                </tr>
              </thead>
              <tbody>
                {mapTerapias()}
              </tbody>
            </table>
          </div>
        } else if (this.props.reporte === 2) {
          return <div className='card'>
            <table>
              <thead>
                <tr>
                  <th className='card-header'>Nombre</th>
                  <th className='card-header'>numero de sesiones</th>
                  <th className='card-header'>Total terapias</th>
                  <th className='card-header'>Mes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.ReporteTerapeuta?.Nombre}</td>
                  <td>{this.state.ReporteTerapeuta?.noTerapias}</td>
                  <td>{this.state.ReporteTerapeuta?.terapiasMes}</td>
                  <td>{this.state.ReporteTerapeuta?.Mes}</td>
                </tr>
              </tbody>
            </table>
          </div>
        } else if (this.props.reporte === 3) {
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
                  <td>{this.state.ReporteCaballo?.Nombre}</td>
                  <td>{this.state.ReporteCaballo?.noTerapias}</td>
                  <td>{this.state.ReporteCaballo?.terapiasMes}</td>
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
                  <td>{this.state.ReporteMes?.mes}</td>
                  <td>{this.state.ReporteMes?.noTerapias}</td>
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
                  <td>{this.state.ReporteEnfermedad?.enfermedad}</td>
                  <td>{this.state.ReporteEnfermedad?.totalPacientes}</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
        return <h1>Aqui va la Tabluki</h1>
      }

      return mainTableInfo()
    }
}

export default MainTable