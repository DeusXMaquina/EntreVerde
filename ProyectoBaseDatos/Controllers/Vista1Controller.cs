using ProyectoBaseDatos.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProyectoBaseDatos.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class Vista1Controller : ApiController
    {
        private Conexion conexion { get; set; }
        List<Paciente> list = new List<Paciente>();

        public Vista1Controller()
        {
            conexion = new Conexion();
        }

        [Route("api/Vista1/GetPaciente")]
        public List <Paciente> Get()
        {
            string comandoSeleccionar =
                   "Select dbo.Nombre (Nombre,ApellidoPaterno,ApellidoMaterno)as 'Paciente', Telefono,  dbo.convertFecha(FechaNacimiento) as 'Fecha Nacimiento', dbo.convertFecha(FechaInscripcion) as 'Fecha Inscripcion' from Paciente";

            SqlParameter[] parametros = new SqlParameter[0];
            //var validar = new Validaciones();

            var datos = conexion.RealizarLectura(comandoSeleccionar);
            var lista = new List<Paciente>();


            foreach (DataRow renglon in datos.Tables[0].Rows)
            { 
                var vista = new Paciente();
                vista.Nombre = renglon[0].ToString();
                vista.Telefono = renglon[1].ToString();
                vista.FechaNacimiento = renglon[2].ToString();
                vista.FechaInscripcion = renglon[3].ToString();
                lista.Add(vista);
            }
            return lista;
        }
    }
}

//string Nombre, string ApellidoPaterno, string ApellidoMaterno, string telefono, int anio, int mes, int dia