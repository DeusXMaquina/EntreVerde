using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoBaseDatos.Models
{
    public class Terapia
    {
        public int IdTerapia { get; set; }
        public int IdPaciente { get; set; }
        public int IdTerapeuta { get; set; }
        public DateTime Fecha { get; set; }
        public string Ejercicios { get; set; }
        public string Comportamientos { get; set; }
        public string Caballo { get; set; }
        public string Equipo { get; set; }
        public string Observaciones { get; set; }
    }

}