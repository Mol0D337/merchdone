module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  productionSourceMap: false,
  pluginOptions: {
    i18n: {
      locale: 'uk',
      fallbackLocale: 'uk',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/vars.scss";`,
      },
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: 'raw-loader',
        },
      ],
    },
  },
};
