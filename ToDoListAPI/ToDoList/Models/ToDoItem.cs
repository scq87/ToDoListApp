using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Models
{
    public class ToDoItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Date { get; set; }
        public string Attributes { get; set; }
        public int Priority { get; set; }
        [ForeignKey(nameof(ToDoList))]
        public int? ToDoListId { get; set; }
        public  ToDoList ToDoList { get; set; }

        [ForeignKey(nameof(Person))]
        public int? PersonId { get; set; }
        public User Person { get; set; }
    }

    public enum Priority
    {
        [Display(Name="Обычный")]
        Base,
        [Display(Name = "Важный")]
        Important,
        [Display(Name = "Срочный")]
        Urgent
    }
}
