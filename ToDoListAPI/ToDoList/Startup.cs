using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using ToDoList.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.OpenApi.Models;
using System.Text;
using ToDoList.Data;
using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using ToDoList.Helpers;

namespace ToDoList
{
    public class Startup
    {
        public  IConfiguration Configuration { get; set; }
        public Startup(IConfiguration confuguration)
        {
            this.Configuration = confuguration;
        }
        public void ConfigureServices(IServiceCollection services)
        {
            /* services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                     .AddJwtBearer(options =>
                     {
                         options.RequireHttpsMetadata = false;
                         options.TokenValidationParameters = new TokenValidationParameters
                         {
                             // укзывает, будет ли валидироваться издатель при валидации токена
                             ValidateIssuer = true,
                             // строка, представляющая издателя
                             ValidIssuer = AuthOptions.ISSUER,

                             // будет ли валидироваться потребитель токена
                             ValidateAudience = true,
                             // установка потребителя токена
                             ValidAudience = AuthOptions.AUDIENCE,
                             // будет ли валидироваться время существования
                             ValidateLifetime = true,

                             // установка ключа безопасности
                             IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
                             // валидация ключа безопасности
                             ValidateIssuerSigningKey = true,
                         };
                     });*/
            services.AddScoped<IAuthRepository, AuthRepository>();
            services.AddCors();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
             .AddJwtBearer(options => {
                 options.TokenValidationParameters = new TokenValidationParameters
                 {
                     ValidateIssuerSigningKey = true,
                     IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(
                         Configuration.GetSection("AppSettings:Token").Value
                     )),
                     ValidateIssuer = false,
                     ValidateAudience = false
                 };
             });
            services.AddDbContext<TodosContext>(options => options.UseSqlServer(Configuration.GetConnectionString("todosDB")));
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ToDoList", Version = "v1" });
            });
            services.AddControllersWithViews();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ToDoList v1"));
            }
            else
            {
                app.UseExceptionHandler(builder => {
                    builder.Run(async context => {
                        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                        var error = context.Features.Get<IExceptionHandlerFeature>();
                        if (error != null)
                        {
                            context.Response.AddApplicationError(error.Error.Message);
                            await context.Response.WriteAsync(error.Error.Message);
                        }
                    });

                });
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseRouting();
            app.UseCors(policy => {
                policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
            });
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
               // endpoints.MapDefaultControllerRoute();
                endpoints.MapControllers();
            });
        }
    }
}
