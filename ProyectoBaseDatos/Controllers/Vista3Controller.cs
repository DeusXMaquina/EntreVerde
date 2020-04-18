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
    public class Vista3Controller : ApiController
    {
        private Conexion conexion { get; set; }
        List<Vista3> list = new List<Vista3>();

        public Vista3Controller()
        {
            conexion = new Conexion();
        }
        // GET: api/Vista3
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

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
            var vista = new Vista3();

            vista.Terapeuta = datos[1].ToString();
            vista.FechaTerapia = datos[2].ToString();
            vista.Ejercicios = datos[3].ToString();
            vista.Comportamientos = datos[4].ToString();
            vista.Caballo = datos[5].ToString();
            vista.Equipo = datos[6].ToString();

            lista.Add(vista);
            return lista;
        }
    }
}
