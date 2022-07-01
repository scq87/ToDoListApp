using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoList.Models;

namespace ToDoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoListsController : ControllerBase
    {
        private readonly TodosContext _context;

        public ToDoListsController(TodosContext context)
        {
            _context = context;
        }

        // GET: api/ToDoLists
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ToDoList.Models.ToDoList>>> GetToDoLists()
        {
            return await _context.ToDoLists.ToListAsync();
        }
        [HttpGet("GetListByUser/{id}")]
        public async Task<ActionResult<IEnumerable<ToDoList.Models.ToDoList>>> GetListByUser(int? id)
        {
            if (id == null)
                return NotFound();
            return await _context.ToDoLists.Where(t=>t.PersonId ==id). ToListAsync();
        }
        [HttpGet("user")]
        public async Task<ActionResult<IEnumerable<ToDoList.Models.User>>> GetUser()
        {
            return await _context.Users.ToListAsync();
        }
        // GET: api/ToDoLists/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ToDoList.Models.ToDoList>> GetToDoList(int id)
        {
            var toDoList = await _context.ToDoLists.FindAsync(id);

            if (toDoList == null)
            {
                return NotFound();
            }

            return toDoList;
        }

        // PUT: api/ToDoLists/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutToDoList(int id, ToDoList.Models.ToDoList toDoList)
        {
            if (id != toDoList.Id)
            {
                return BadRequest();
            }

            _context.Entry(toDoList).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToDoListExists(id))
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

        // POST: api/ToDoLists
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ToDoList.Models.ToDoList>> PostToDoList(ToDoList.Models.ToDoList toDoList)
        {
            _context.ToDoLists.Add(toDoList);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetToDoList", new { id = toDoList.Id }, toDoList);
        }

        // DELETE: api/ToDoLists/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteToDoList(int id)
        {
            var toDoList = await _context.ToDoLists.FindAsync(id);
            if (toDoList == null)
            {
                return NotFound();
            }
            await _context.Entry(toDoList).Collection(t => t.ToDoItems).LoadAsync();
            var todoItems = toDoList.ToDoItems;
            toDoList.ToDoItems.Clear();
            _context.AttachRange(todoItems);
            _context.ToDoItems.RemoveRange(todoItems);
            await _context.SaveChangesAsync();
            _context.ToDoLists.Remove(toDoList);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ToDoListExists(int id)
        {
            return _context.ToDoLists.Any(e => e.Id == id);
        }
    }
}
