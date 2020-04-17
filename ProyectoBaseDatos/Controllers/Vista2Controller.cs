﻿using ProyectoBaseDatos.Models;
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

        // GET: api/Vista2/5
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

            vista.Nombre = datos[0].ToString();
            vista.Telefono = datos[1].ToString();
            vista.FechaNacimiento = datos[2].ToString();
            vista.NombreContactoEmergencia = datos[3].ToString();
            vista.TelefonoContactoEmergencia = datos[4].ToString();
            vista.Alergias = datos[5].ToString();
            vista.Medicamentos = datos[6].ToString();
            vista.Medicamentos = datos[7].ToString();
            vista.Observaciones = datos[8].ToString();

            return vista;
        }
    }
}
