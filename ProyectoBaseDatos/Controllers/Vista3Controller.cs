using ProyectoBaseDatos.Models;
using System.Collections.Generic;
using System.Data.SqlClient;

using System.Web.Http;
using System.Web.Http.Cors;

namespace ProyectoBaseDatos.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class Vista3Controller : ApiController
    {
        private Conexion conexion { get; set; }
        List<Vista3> list = new List<Vista3>();

        public Vista3Controller()
        {
            conexion = new Conexion();
        }
        // GET: api/Vista3

        [Route("api/Vista3/{id:int}")]
        public List<Vista3> Get(int id)
        {
            string comandoSeleccionar =
               "dbo.terapiaXAlumno";

            SqlParameter[] parametros = new SqlParameter[1]
            {
                new SqlParameter ("@Id", id)
            };

            var datos = conexion.LeerProcedimientoAlmacenado(comandoSeleccionar, parametros);
            var lista = new List<Vista3>();

            if (datos.Count == 0)
            {
                return lista;
            }

            for (int i = 0; i < datos.Count; i++)
            {
                var vista = new Vista3();

                var columnas = datos[i].Columnas;

                vista.Terapeuta = columnas[1];
                vista.FechaTerapia = columnas[2];
                vista.Ejercicios = columnas[3];
                vista.Comportamientos = columnas[4];
                vista.Caballo = columnas[5];
                vista.Equipo = columnas[6];

                lista.Add(vista);
            }
            return lista;
        }
    }
}
