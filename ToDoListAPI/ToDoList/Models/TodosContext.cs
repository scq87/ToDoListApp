using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Models
{
    public class TodosContext : DbContext
    {
        public DbSet<User> People { get; set; }
        public DbSet<ToDoItem> ToDoItems { get; set; }
        public DbSet<ToDoList> ToDoLists { get; set; }

        public DbSet<User> Users { get; set; }
        public TodosContext(DbContextOptions<TodosContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User { Id = 1, Username = ""}
                );
            ToDoItem item1 = new ToDoItem { Id = 1, PersonId=1 };
            modelBuilder.Entity<ToDoItem>().HasData(item1
                );
            ToDoItem item2 = new ToDoItem { Id =2, PersonId = 1 };
            modelBuilder.Entity<ToDoItem>().HasData(item2
                );
            ToDoList list1 = new ToDoList { Id = 1, PersonId = 1 };
            //list1.ToDoItems.Add(item1);
            modelBuilder.Entity<ToDoList>().HasData(
                list1
                );
        }
    }
}
