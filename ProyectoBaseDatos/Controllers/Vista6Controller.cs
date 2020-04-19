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
    public class Vista6Controller : ApiController
    {
        private Conexion conexion { get; set; }
        Vista6 vista = new Vista6();

        public Vista6Controller()
        {
            conexion = new Conexion();
        }
        // GET: api/Vista6
        public Vista6 Get()
        {
            string comandoSeleccionar =
                        "dbo.mesTerapia";
            //var validar = new Validaciones();

            SqlParameter[] parametros = new SqlParameter[0];
            //var validar = new Validaciones();

            var datos = conexion.LeerProcedimientoAlmacenado(comandoSeleccionar, parametros);

            if (datos.Count == 0)
            {
                return vista;
            }
            
            var columna = datos[0].Columnas;

            vista.Mes = columna[0];
            vista.Terapias = Int32.Parse(columna[1]);
            vista.Año = Int32.Parse(columna[2]);

            return vista;
        }

    }
}
