using ProyectoBaseDatos.Models;
using System;
using System.Data.SqlClient;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProyectoBaseDatos.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
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

            var columna = datos[0].Columnas;

            vista.Enfermedad = columna[0];
            vista.NumeroPacientes = Int32.Parse(columna[1]);

            return vista;
        }
    }
}
