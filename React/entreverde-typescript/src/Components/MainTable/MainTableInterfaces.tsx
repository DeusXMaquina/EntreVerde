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
    Nombre:string,
    noTerapias:number,
    terapiasMes:number,
    Mes:string
}

export interface IReporteCaballo {
    Nombre:string,
    noTerapias:number,
    terapiasMes:number
}

export interface IMes {
  mes:string,
  noTerapias:number,
  Año:number
}

export interface IEnfermedad {
  enfermedad:string,
  totalPacientes:number
}