using ProyectoBaseDatos.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProyectoBaseDatos.Controllers
{
    public class Vista7Controller : ApiController
    {
        private Conexion conexion { get; set; }
        Vista7 vista = new Vista7();

        public Vista7Controller()
        {
            conexion = new Conexion();
        }
            // GET: api/Vista7
            public Vista7 Get()
        {
            string comandoSeleccionar =
            "dbo.enfermedadComun";


            SqlParameter[] parametros = new SqlParameter[0];

            var datos = conexion.LeerProcedimientoAlmacenado(comandoSeleccionar, parametros);

            if (datos.Count == 0)
            {
                return vista;
            }

            vista.Enfermedad = datos[0].ToString();
            vista.NumeroPacientes = Int32.Parse(datos[1]);

            return vista;
        }
    }
}
