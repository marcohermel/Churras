using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Churras.Models;

namespace Churras.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChurrascosController : ControllerBase
    {
        private readonly dbContext _context;

        public ChurrascosController(dbContext context)
        {
            _context = context;
        }

        // GET: api/Churrascos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Churrasco>>> GetChurrascos()
        {
            return await _context.Churrascos.ToListAsync();
        }

        // GET: api/Churrascos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Churrasco>> GetChurrasco(int id)
        {
            var churrasco = await _context.Churrascos.FindAsync(id);

            if (churrasco == null)
            {
                return NotFound();
            }

            return churrasco;
        }

        // PUT: api/Churrascos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutChurrasco(int id, Churrasco churrasco)
        {
            if (id != churrasco.ChurrascoID)
            {
                return BadRequest();
            }

            _context.Entry(churrasco).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ChurrascoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Churrascos
        [HttpPost]
        public async Task<ActionResult<Churrasco>> PostChurrasco(Churrasco churrasco)
        {
            try
            {
                _context.Churrascos.Add(churrasco);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetChurrasco", new { id = churrasco.ChurrascoID }, churrasco);
            }
            catch (Exception e)
            {
                return CreatedAtAction("GetChurrasco", e.Message);
            }
        }

        // DELETE: api/Churrascos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Churrasco>> DeleteChurrasco(int id)
        {
            var churrasco = await _context.Churrascos.FindAsync(id);
            if (churrasco == null)
            {
                return NotFound();
            }

            _context.Churrascos.Remove(churrasco);
            await _context.SaveChangesAsync();

            return churrasco;
        }

        private bool ChurrascoExists(int id)
        {
            return _context.Churrascos.Any(e => e.ChurrascoID == id);
        }
    }
}
