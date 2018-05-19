const path = require('path')

module.exports = {
  title: 'misc', // …
  description: 'a place for miscellanea',
  themeConfig: {
    repo: 'edm00se/misc',
    docsRepo: 'edm00se/misc',
    editLinks: false,

    // custom property to show links about you
    usefulLinks: [
      {
        href: 'https://twitter.com/edm00se',
        cssIcon: 'fa fa-fw fa-twitter'
      },
      {
        href: 'https://stackoverflow.com/cv/edm00se',
        cssIcon: 'fa fa-fw fa-stack-overflow'
      },
      {
        href: 'https://github.com/edm00se',
        cssIcon: 'fa fa-fw fa-github'
      },
      {
        href: 'https://www.linkedin.com/in/emccormick',
        cssIcon: 'fa fa-fw fa-linkedin'
      }
    ]
  },

  // This allows to install local loaders for the custom theme (eg: sass-loader, less-lodaer)
  chainWebpack: (config, isServer) => {
    config.resolveLoader
      .modules
      .add(path.resolve(__dirname, './node_modules'))
  }
}
