using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoBaseDatos.Models
{
    public class FichaMedica
    {
        /// <summary>
        /// Primary Key Identifier in SQL
        /// </summary>
        public int IdFichaMedica { get; set; }
        /// <summary>
        /// Foreing Key Paciente Identifier
        /// </summary>
        public int IdPaciente { get; set; }
        /// <summary>
        /// get's Nombre de Contacto Emergencia
        /// </summary>
        public string NombreContactoEmergencia { get; set; }
        /// <summary>
        /// get's Telefono Contacto de Emergencia
        /// </summary>
        public string TelContactoEmergencia { get; set; }
        /// <summary>
        /// get's alergias
        /// </summary>
        public string Alergias { get; set; }
        /// <summary>
        /// get's Enfermedades
        /// </summary>
        public string Enfermedades { get; set; }
        /// <summary>
        /// get's Medicamentos
        /// </summary>
        public string Medicamentos { get; set; }
        /// <summary>
        /// get's observaciones
        /// </summary>
        public string Obsevaciones { get; set; }
    }
}