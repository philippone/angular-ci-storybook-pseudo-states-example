// @ts-nocheck
const loggerPack = require("@storybook/node-logger");
const util = require('util');
const postcssPseudoPlugin = require('postcss-pseudo-classes');

function wrapLoader(loader, options) {
  if (options === false) {
    return [];
  }

  return [
    {
      loader,
      options
    }
  ];
}

/*function webpack(webpackConfig = {}, options = {}) {

    // const webpackConfigParsed = JSON.parse(webpackConfig);
    // loggerPack.logger.info(
    //     `config from webpack before \`${webpackConfig}\``,
    // );

    setTimeout(() => {

        webpackConfig.module.rules.map(r => {
            loggerPack.logger.info(`rule from config ${r.test}`);
            return r;
        });

    });

    const {module = {}} = webpackConfig;
    const {
        styleLoaderOptions,
        cssLoaderOptions,
        postCssLoaderOptions,
        sassLoaderOptions,
        rule = {}
    } = options;

    /!* // replace module.scss rule with own to enable post-css
     webpackConfig.module.rules = webpackConfig.module.rules.map(r => {
         if (r.test.toString() === '/\\.module\\.(scss|sass)$/') {
             return {
                 // test: /\.s[ca]ss$/,
                 test: /\.module\.s[ca]ss$/,
                 // test: /.xyz/,
                 // ...rule,
                 use: [
                     ...wrapLoader('style-loader', styleLoaderOptions),
                     ...wrapLoader('css-loader', cssLoaderOptions),
                     ...wrapLoader('postcss-loader', postCssLoaderOptions),
                     ...wrapLoader('sass-loader', sassLoaderOptions),
                 ]
             };
         } else {
             return r;
         }
     });

     return webpackConfig;*!/

    return {
        ...webpackConfig,
        // module: {
        //     ...module,
        //     rules: [
        //         ...(module.rules || []),
        //         {
        //             test: /\.s[ca]ss$/,
        //             // test: /\.module\.s[ca]ss$/,
        //             // test: /.xyz/,
        //             ...rule,
        //             use: [
        //                 ...wrapLoader('style-loader', styleLoaderOptions),
        //                 ...wrapLoader('css-loader', cssLoaderOptions),
        //                 // ...wrapLoader('postcss-loader', postCssLoaderOptions),
        //                 ...wrapLoader('sass-loader', sassLoaderOptions),
        //             ]
        //         }
        //     ]
        // }
    };
}*/

const insertPostCSSPseudoClassLoader = (webpackConfig, options) => {
  const {module = {}} = webpackConfig;
  const {
    styleLoaderOptions,
    cssLoaderOptions,
    postCssLoaderOptions,
    sassLoaderOptions,
    rule = {}
  } = options;
  return {
    ...webpackConfig,
    module: {
      ...module,
      rules: [
        ...(module.rules || []),
        {
          // test: /\.s[ca]ss$/,
          test: /\.module\.s[ca]ss$/,
          // test: /\.scss$|\.sass$/,
          ...rule,
          use: [
            ...wrapLoader('style-loader', styleLoaderOptions),
            ...wrapLoader('css-loader', cssLoaderOptions),
            ...wrapLoader('postcss-loader', postCssLoaderOptions),
            ...wrapLoader('sass-loader', sassLoaderOptions),
          ]
        }
      ]
    }
  };
};

/*function webpack(webpackConfig = {}, options = {}) {

  return webpackConfig;
}*/

function webpack(webpackConfig = {}, options = {}) {
  return webpackConfig;
}

function webpackFinal(webpackConfig = {}, options = {}) {

  loggerPack.logger.info(`==> configDir  ${typeof options}`);
  loggerPack.logger.info(`==> configDir  ${options}`);
  //
  // for (const e in options) {
  //   loggerPack.logger.info(`==> Installed Runle in webpack Final configDir entrie ${e}`);
  //   for (const ie in e) {
  //     loggerPack.logger.info(`==> entry ${ie}`);
  //   }
  // }

  // webpackConfig = insertPostCSSPseudoClassLoader(webpackConfig, options);

  webpackConfig.module.rules.forEach((r) => {
    if (r.test.toString() === '/\\.scss$|\\.sass$/') {
      // loggerPack.logger.info(`==> Installed Runle in webpack Final ${util.inspect(r, {showHidden: false, depth: null})}`);

      for (const loader of r.use) {
        // loggerPack.logger.info(`==> Looking for ${util.inspect(loader, {
        //   showHidden: false,
        //   depth: null
        // })}`);

        let loaderPath = loader;
        if (loader.hasOwnProperty('loader')) {
          loaderPath = loader.loader;
        }

        if (loaderPath.indexOf('postcss-loader') >= 0) {
          // loggerPack.logger.info(`==> Found postcss-loader ${util.inspect(loader, {
          //   showHidden: false,
          //   depth: null
          // })}`);

          if (loader.hasOwnProperty('options')) {

            if (loader.options.hasOwnProperty('plugins')) {
              loggerPack.logger.info(`==> Found postcss-loader ${util.inspect(loader, {
                showHidden: false,
                depth: null
              })}`);
              loader.options.plugins = () => [
                require('postcss-flexbugs-fixes'),
                // require('postcss-pseudo-classes'),
                postcssPseudoPlugin({
                  prefix: 'pseudo-sates--',
                  // blacklist: ':not'
                }),
              ];
              // loader.options.plugins = {
              //   'postcss-pseudo-classes': {
              //     // prefix: 'pseudoclass--',
              //     // blacklist: ':not'
              //   }
              // })
            }
          }

        }
      }

    }

  });

  return webpackConfig;
}

module.exports = {webpack, webpackFinal};
