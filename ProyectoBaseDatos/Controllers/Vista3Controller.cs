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

        // GET: api/Vista3/5
        public List<Vista3> Get(string texto)
        {
            string comandoSeleccionar =
               "dbo.terapiaXAlumno";

            SqlParameter[] parametros = new SqlParameter[1]
            {
                new SqlParameter ("@texto", texto)
            };

            var datos = conexion.LeerProcedimientoAlmacenado(comandoSeleccionar, parametros);
            var lista = new List<Vista3>();

            if (datos.Count == 0)
            {
                return lista;
            }
            var vista = new Vista3();

            vista.Terapeuta = datos[0].ToString();
            vista.FechaTerapia = datos[1].ToString();
            vista.Ejercicios = datos[2].ToString();
            vista.Comportamientos = datos[3].ToString();
            vista.Caballo = datos[4].ToString();
            vista.Equipo = datos[5].ToString();

            lista.Add(vista);
            return lista;
        }
    }
}
