using ProyectoBaseDatos.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProyectoBaseDatos.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ValuesController : ApiController
    {
        private Conexion conexion { get; set; }
   

        public ValuesController()
        {
            conexion = new Conexion();
        }

        // POST api/values
        public IHttpActionResult Post([FromBody] PacienteInsertar paciente)
        {
            DateTime fecha = new DateTime(paciente.Anio, paciente.mes, paciente.dia);

            string comandoInsertar = "INSERT INTO [dbo].[Paciente] " +
            "(Nombre,ApellidoPaterno,ApellidoMaterno,Telefono,FechaNacimiento,FechaInscripcion)" +
             "VALUES" +
            "(@Nombre, @ApellidoPaterno, @ApellidoMaterno, @Telefono, @FechaNacimiento, GETDATE())";

            SqlParameter[] parametros = new SqlParameter[5]
            {
                new SqlParameter ("@Nombre", paciente.Nombre),
                new SqlParameter ("@ApellidoPaterno", paciente.ApellidoPaterno),
                new SqlParameter ("@ApellidoMaterno", paciente.ApellidoMaterno),
                new SqlParameter ("@Telefono", paciente.Telefono),
                new SqlParameter ("@FechaNacimiento", fecha)
            };

            conexion.EjecutarComando(comandoInsertar, parametros);

            return Ok();
        }
    }
}
