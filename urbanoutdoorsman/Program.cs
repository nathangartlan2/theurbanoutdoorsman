
using System;
using System.Runtime;
using Elastic.Clients.Elasticsearch;
using Elastic.Clients.Elasticsearch.Core;
using Elastic.Transport;
using Microsoft.Extensions.DependencyInjection;

namespace urbanoutdoorsman;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllersWithViews();
        builder.Services.AddControllers();


        var elasticSettings = builder.Configuration.GetSection("ElasticConfig").Get<ElasticConfig>();

        string url = elasticSettings.ELASTIC_URL;
        string token = elasticSettings.TOKEN;

        var settings = new ElasticsearchClientSettings(new Uri(url))
            .CertificateFingerprint(token)
            .Authentication(new BasicAuthentication("elastic", elasticSettings.PASSWORD));

        builder.Services.AddSingleton<ElasticsearchClient>(s =>
        {
            
            return new ElasticsearchClient(settings);
        });

        builder.Services.AddSingleton<IBlogPostRetriever>(s =>
            new ElasticBlogPostRetriever(s.GetService<ElasticsearchClient>(),
            elasticSettings.INDEX)
        );

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (!app.Environment.IsDevelopment())
        {
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
        }

        app.UseHttpsRedirection();
        app.UseStaticFiles();
        app.UseRouting();


        //app.MapControllerRoute(
        //    name: "default",
        //    pattern: "{controller}/{action=Index}/{id?}");

        app.MapControllerRoute(
            name: "default",
            pattern: "{controller}");

        app.MapFallbackToFile("index.html");

        app.Run();
    }

}

