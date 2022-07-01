using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.DTOS
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(12, MinimumLength = 4, ErrorMessage = "Длина пароля должна быть от 4 до 12 символов!")]
        public string Password { get; set; }
    }
}
