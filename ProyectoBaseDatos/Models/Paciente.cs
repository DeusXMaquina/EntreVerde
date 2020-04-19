using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoBaseDatos.Models
{
    public class Paciente
    {
        public string Nombre { get; set; }

        public string Telefono { get; set; }

        public string FechaNacimiento { get; set; }

        public string FechaInscripcion { get; set; }
    }
}