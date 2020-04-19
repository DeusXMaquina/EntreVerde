export interface IPacientes {
    Nombre:string,
    Telefono:string,
    FechaNacimiento:string,
    FechaInscripcion:string
}

export interface IPaciente {
    id: number,
    Nombre:string,
    Telefono:string,
    FechaNacimiento:string,
    NombreContactoEmergencia:string,
    TelefonoContactoEmergencia:string,
    Alergias:string,
    Medicamentos:string,
    Enfermedades:string,
    Observaciones:string
}

export interface IAlumno {
    id: number,
    Terapeuta:string,
    fechaTerapia:string,
    Ejercicios:string,
    Comportamiento:string,
    Caballo:string,
    Equipo:string,
    Observaciones:string
}
export interface ITerapeutas {
    id:number,
    Nombre:string,
    Telefono:string
}

export interface IReporteTerapeuta {
    Terapeuta:string,
    Sesiones:number,
    TotalTerapias:number
}

export interface IReporteCaballo {
    Caballo:string,
    Sesiones:number,
    Terapias:number
}

export interface IMes {
  Mes:string,
  Terapias:number,
  Año:number
}

export interface IEnfermedad {
  Enfermedad:string,
  NumeroPacientes:number
}

export interface IInfoTerapias {
  Terapeuta:string,
  FechaTerapia:string,
  Ejercicios:string,
  Comportamientos:string,
  Caballo:string,
  Equipo:string
}