using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace ProyectoBaseDatos.Models
{
    public class Conexion
    {
        private SqlConnection Servidor { get; set; }


        public string connectionString = "Data Source=DESKTOP-6BJQUEF;Database=Entreverde;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
        public Conexion()
        {
            Servidor = new SqlConnection(connectionString);
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

        public List<Fila> LeerProcedimientoAlmacenado(string comando, SqlParameter[] parametros)
        {
            SqlCommand comandoSQL = new SqlCommand();

            comandoSQL.CommandType = CommandType.StoredProcedure;
            comandoSQL.CommandText = comando;
            comandoSQL.Parameters.AddRange(parametros);

            AbrirConexion();
            comandoSQL.Connection = Servidor;
            var info = new List<Fila>();

            var respuesta = comandoSQL.ExecuteReader();
            while (respuesta.Read())
            {
                Fila fila = new Fila();

                for (int i = 0; i <= respuesta.FieldCount - 1; i++)
                {
                    fila.Columnas.Add(respuesta[i].ToString());
                    
                }

                info.Add(fila);
            }
            respuesta.Close();
            CerrarConexion();
            return info;
        }

        public DataSet RealizarLectura(string comando)
        {
            var info = new DataSet();

            AbrirConexion();
            var adaptador = new SqlDataAdapter(comando, Servidor);
            adaptador.Fill(info);
            CerrarConexion();
            return info;
        }

        public bool EjecutarComando(string comando, SqlParameter[] parametros)
        {
            SqlCommand comandoSQL = new SqlCommand();
            comandoSQL.CommandType = CommandType.Text;
            comandoSQL.CommandText = comando;
            comandoSQL.Parameters.AddRange(parametros);

            AbrirConexion();

            comandoSQL.Connection = Servidor;

            var resultado = comandoSQL.ExecuteNonQuery();

            CerrarConexion();

            return resultado > 0;
        }
    }
}