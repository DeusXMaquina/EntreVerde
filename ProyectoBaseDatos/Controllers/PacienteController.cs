using ProyectoBaseDatos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProyectoBaseDatos.Controllers
{
    public class PacienteController : ApiController
    {

        List<Paciente> paciente = new List<Paciente>();

        public PacienteController()
        {
            //Database call
        }
        // GET: api/Paciente
        public List<Paciente> Get()
        {
            //mylibraryclass 
            return paciente;
        }

        // GET: api/Paciente/5
        public Paciente Get(int id)
        {
            //Database should happend in the library not here
            return paciente.Where(x => x.IdPaciente == id).FirstOrDefault();
        }

        // POST: api/Paciente
        public void Post(Paciente value)
        {
            //Saving data
            paciente.Add(value);
        }

        // PUT: api/Paciente/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Paciente/5
        public void Delete(int id)
        {
            
        }
    }
}
