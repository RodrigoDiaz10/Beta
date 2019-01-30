using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using TodoApi.Models;
using System.Web.Cors;
using System;

namespace TodoApi {
    [Route ("api/todo")]
    [ApiController]
    public class TodoController : ControllerBase {
        private readonly TodoContext _context;
        public TodoController (TodoContext context) {
            _context = context;

            if (_context.TodoItems.Count () == 0) {
                _context.SaveChanges ();
            }
        }

        [HttpGet]
        public ActionResult<List<TodoItem>> GetAll () {
            return _context.TodoItems.ToList ();
        }

        [HttpGet ("{id}", Name = "GetTodo")]
        public ActionResult<TodoItem> GetById (long id) {
            var item = _context.TodoItems.Find (id);
            if (item == null) {
                return NotFound ();
            }
            return item;
        }

        // Create
        [HttpPost]
        public IActionResult Create (TodoItem item) {
            _context.TodoItems.Add (item);
            _context.SaveChanges ();
            return CreatedAtRoute ("GetTodo", new { id = item.Id }, item);
        }

        // Update
        [HttpPut ("{id}")]
        public IActionResult Update (long id, TodoItem item) {
            var todo = _context.TodoItems.Find (id);
            if (todo == null) {
                return NotFound ();
            }

            todo.IsComplete = item.IsComplete;
            todo.Name = item.Name;

            _context.TodoItems.Update (todo);
            _context.SaveChanges ();
            return NoContent ();
        }

        //Delete
        [HttpDelete ("{id}")]
        public IActionResult Delete (long id) {
            var todo = _context.TodoItems.Find (id);
            if (todo == null) {
                return NotFound ();
            }

            _context.TodoItems.Remove (todo);
            _context.SaveChanges ();
            return NoContent ();
        }
    }
}