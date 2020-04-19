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
    public class Vista5Controller : ApiController
    {
        private Conexion conexion { get; set; }
        Vista5 vista = new Vista5();




        public Vista5Controller()
        {
            conexion = new Conexion();
        }
        // GET: api/Vista5
        public Vista5 Get()
        {
            string comandoSeleccionar =
                  "dbo.mejorCaballo";
            //var validar = new Validaciones();

            SqlParameter[] parametros = new SqlParameter[0];
            //var validar = new Validaciones();

            var datos = conexion.LeerProcedimientoAlmacenado(comandoSeleccionar, parametros);

            if (datos.Count == 0)
            {
                return vista;
            }

            var columna = datos[0].Columnas;

            vista.Caballo = columna[0];
            vista.Sesiones = Int32.Parse(columna[1]);
            vista.Terapias = Int32.Parse(columna[2]);

            return vista;
        }

    }
}
