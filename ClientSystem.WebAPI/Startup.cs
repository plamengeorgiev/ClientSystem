using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(ClientSystem.WebAPI.Startup))]

namespace ClientSystem.WebAPI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCors(new CorsOptions()
            {
                PolicyProvider = new CorsPolicyProvider()
                {
                    PolicyResolver = request =>
                    {
                        if (request.Path.StartsWithSegments(new PathString(TokenEndpointPath)))
                        {
                            return Task.FromResult(new CorsPolicy { AllowAnyOrigin = true });
                        }

                        return Task.FromResult<CorsPolicy>(null);
                    }
                }
            });

            ConfigureAuth(app);

            GlobalConfiguration.Configuration.IncludeErrorDetailPolicy = IncludeErrorDetailPolicy.Always;
        }
    }
}
