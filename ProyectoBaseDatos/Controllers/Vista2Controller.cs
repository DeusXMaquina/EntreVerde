using ProyectoBaseDatos.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProyectoBaseDatos.Controllers
{
    public class Vista2Controller : ApiController
    {
        private Conexion conexion { get; set; }
        List<Vista2> list = new List<Vista2>();

        public Vista2Controller()
        {
            conexion = new Conexion();
        }

        [Route("api/Vista2/Get/{id:int}")]
        public Vista2 Get(int id)
        {
            string comandoSeleccionar =
                   "dbo.busquedaXNombre";

            SqlParameter[] parametros = new SqlParameter[1]
            {
                new SqlParameter ("@Id", id)
            };
            //var validar = new Validaciones();

            var datos = conexion.LeerProcedimientoAlmacenado(comandoSeleccionar, parametros);
            var vista = new Vista2();
            if (datos.Count == 0)
            {
                return vista;
            }
            var columna = datos[0].Columnas;

            vista.Nombre = columna[0];
            vista.Telefono = columna[1];
            vista.FechaNacimiento = columna[2];
            vista.NombreContactoEmergencia = columna[3];
            vista.TelefonoContactoEmergencia = columna[4];
            vista.Alergias = columna[5];
            vista.Medicamentos = columna[6];
            vista.Medicamentos = columna[7];
            vista.Observaciones = columna[8];

            return vista;
        }
    }
}
