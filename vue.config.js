module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  devServer: {
    host: 'frontend.alles-im-rudel-backend.test'
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
