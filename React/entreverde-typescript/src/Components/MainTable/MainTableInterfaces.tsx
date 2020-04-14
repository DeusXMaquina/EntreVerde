export interface IPacientes {
    id:number,
    Nombre:string,
    Telefono:string,
    fechaNacimiento:string,
    fechaInscripcion:string
}

export interface IPaciente {
    id: number,
    Nombre:string,
    Telefono:string,
    fechaNacimiento:string,
    contactoEmergencia:string,
    telefonoEmergencia:string,
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
    terapiasMes:number
}

export interface IMes {
  mes:string,
  noTerapias:number
}

export interface IEnfermedad {
  enfermedad:string,
  totalPacientes:number
}