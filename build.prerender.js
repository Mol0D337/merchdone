module.exports = (api, options) => {
  api.registerCommand('build:prerender', async (args) => {
    const PrerenderSPAPlugin = require('prerender-spa-plugin');
    const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
    const path = require('path');

    api.chainWebpack((config) => {
      if (process.env.NODE_ENV !== 'production') return;
      config
        .plugin('html')
        .tap((args) => {
          args[0].template = path.join(__dirname, 'public', 'index.html');
          args[0].filename = 'app.html';
          return args;
        });
      config.plugin('prerender').use(PrerenderSPAPlugin, [{
        staticDir: path.join(__dirname, 'dist'), // The path to the folder where index.html is.
        indexPath: path.join(__dirname, './dist', 'app.html'),
        routes: [
          '/',
          '/models',
          '/service',
          '/contacts',
          '/calculator',
        ], // List of routes to prerender and adding the routes for blog posts.
        ignoreJSErrors: true,
        renderer: new Renderer({
          renderAfterElementExists: '[data-view]',
          maxConcurrentRoutes: 1,
          // renderAfterTime: 5000,
          injectProperty: '__PRERENDER_INJECTED',
          inject: {
            prerendered: true,
          },
        }),
      }]);
    });

    await api.service.run('build', args);
  });
};

module.exports.defaultModes = {
  'build:prerender': 'production',
};
