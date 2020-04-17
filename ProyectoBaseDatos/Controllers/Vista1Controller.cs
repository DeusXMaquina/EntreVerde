using ProyectoBaseDatos.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProyectoBaseDatos.Controllers
{
    public class Vista1Controller : ApiController
    {
        private Conexion conexion { get; set; }
        List<Paciente> list = new List<Paciente>();

        public Vista1Controller()
        {
            conexion = new Conexion();
        }

        // GET: api/Vista1/5
        public List <Paciente> Get()
        {
            var vista = new Paciente();

            string comandoSeleccionar =
                   "Select dbo.Nombre (Nombre,ApellidoPaterno,ApellidoMaterno)as 'Paciente', Telefono,  dbo.convertFecha(FechaNacimiento) as 'Fecha Nacimiento', dbo.convertFecha(FechaInscripcion) as 'Fecha Inscripcion' from Paciente";

            SqlParameter[] parametros = new SqlParameter[0];
            //var validar = new Validaciones();

            var datos = conexion.RealizarLectura(comandoSeleccionar);
            var lista = new List<Paciente>();


            foreach (DataRow renglon in datos.Tables[0].Rows)
            { 
                vista.Nombre = renglon[0].ToString();
                vista.Telefono = renglon[1].ToString();
                vista.FechaNacimiento = renglon[2].ToString();
                vista.FechaInscripcion = renglon[3].ToString();
                lista.Add(vista);
            }
            return lista;
        }


        // PUT: api/Vista1/5
        public void Put(int id, [FromBody]string value)
        {

        }

    }
}
