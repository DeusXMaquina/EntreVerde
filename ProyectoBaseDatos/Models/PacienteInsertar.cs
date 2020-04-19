using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoBaseDatos.Models
{
    public class PacienteInsertar
    {
        public string Nombre { get; set; }

        public string  ApellidoPaterno { get; set; }

        public string ApellidoMaterno { get; set; }

        public string Telefono { get; set; }

        public int Anio { get; set; }

        public int mes { get; set; }

        public int dia { get; set; }
    }
}