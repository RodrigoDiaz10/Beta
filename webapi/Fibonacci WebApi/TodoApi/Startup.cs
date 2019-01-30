using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TodoApi.Models;

namespace TodoApi {
    public class Startup {
        public void ConfigureServices (IServiceCollection services) {

            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    }));
            services.AddMvc ()
                .SetCompatibilityVersion (CompatibilityVersion.Version_2_1);

            services.AddDbContext<TodoContext> (opt =>
                opt.UseInMemoryDatabase ("TodoList"));
        }

        public void Configure (IApplicationBuilder app) {
            app.UseCors("MyPolicy");
            app.UseMvcWithDefaultRoute();  
            app.UseDefaultFiles ();
            app.UseStaticFiles ();
            app.UseMvc ();
        }
    }
}