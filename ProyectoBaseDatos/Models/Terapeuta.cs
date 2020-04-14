using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoBaseDatos.Models
{
    public class Terapeuta
    {
        public int IdTerapeuta { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public DateTime FechaInscripcion { get; set; }
    }
}