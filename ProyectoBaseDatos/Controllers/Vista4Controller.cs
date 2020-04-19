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
    public class Vista4Controller : ApiController
    {
        private Conexion conexion { get; set; }
        Vista4 vista = new Vista4();

        public Vista4Controller()
        {
            conexion = new Conexion();
        }

        [Route("api/Vista4/{anio:int}/{mes:int}/{dia:int}")]
        public Vista4 Get(int anio, int mes, int dia)
        {
            DateTime fecha = new DateTime(anio, mes, dia);

            string comandoSeleccionar =
                   "dbo.TerapeutaporMes";

            SqlParameter[] parametros = new SqlParameter[1]
            {
                new SqlParameter ("@fecha", fecha)
            };
            //var validar = new Validaciones();

            var datos = conexion.LeerProcedimientoAlmacenado(comandoSeleccionar, parametros);

            if (datos.Count == 0)
            {
                return vista;
            }

            var columna = datos[0].Columnas; 

            vista.Terapeuta = columna[0];
            vista.Sesiones = Int32.Parse(columna[1]);
            vista.TotalTerapias = Int32.Parse(columna[2]);

            return vista;
        }
    }
}
