using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public List<ToDoList> ToDoLists { get; set; } = new List<ToDoList>();
        public List<ToDoItem> ToDoItems { get; set; } = new List<ToDoItem>();
    }
}
