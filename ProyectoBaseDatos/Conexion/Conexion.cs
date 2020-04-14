using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace ProyectoBaseDatos.Conexion
{
    public class Conexion
    {
        private SqlConnection Servidor { get; set; }

        public Conexion(string cadena)
        {
            Servidor = new SqlConnection(cadena);
        }

        private bool AbrirConexion()
        {
            Servidor.Open();
            return Servidor.State == ConnectionState.Open;
        }

        private bool CerrarConexion()
        {
            Servidor.Close();
            return Servidor.State == ConnectionState.Closed;
        }

        public List<String> LeerProcedimientoAlmacenado(string comando, SqlParameter[] parametros)
        {
            SqlCommand comandoSQL = new SqlCommand();

            comandoSQL.CommandType = CommandType.StoredProcedure;
            comandoSQL.CommandText = comando;
            comandoSQL.Parameters.AddRange(parametros);

            AbrirConexion();
            comandoSQL.Connection = Servidor;
            var info = new List<string>();

            var respuesta = comandoSQL.ExecuteReader();
            while (respuesta.Read())
            {
                for (int i = 0; i <= respuesta.FieldCount - 1; i++)
                {
                    info.Add(respuesta[i].ToString());
                }
            }
            respuesta.Close();
            CerrarConexion();
            return info;
        }

    }
}