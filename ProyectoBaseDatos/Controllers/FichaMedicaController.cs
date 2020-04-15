using ProyectoBaseDatos.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProyectoBaseDatos.Controllers
{
    public class FichaMedicaController : ApiController
    {
        private Conexion conexion { get; set; }
        List<FichaMedica> fichaMed = new List<FichaMedica>();

        public FichaMedicaController() 
        {
            var cadena = ConfigurationManager.ConnectionStrings["EntreVerde"].ConnectionString;
            conexion = new Conexion(cadena);
        }

        // GET: api/FichaMedica
        public List<FichaMedica> Get()
        {
            return fichaMed;
        }

        // GET: api/FichaMedica/5
        public FichaMedica Get(int id)
        {
            return fichaMed.Where(x => x.IdPaciente== id).FirstOrDefault();
        }

        // POST: api/FichaMedica
        public void Post(FichaMedica value)
        {
        }

        // PUT: api/FichaMedica/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/FichaMedica/5
        public void Delete(int id)
        {
        }
    }
}
