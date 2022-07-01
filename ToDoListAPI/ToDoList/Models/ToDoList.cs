using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Models
{
    public class ToDoList
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<ToDoItem> ToDoItems { get; set; } = new List<ToDoItem>();
     
        [ForeignKey(nameof(Person))]
        public int? PersonId { get; set; }
        public User Person { get; set; }
    }
}
