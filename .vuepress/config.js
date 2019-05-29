const path = require('path')
let basePath = '/misc/';

if(process.env.NOW_BUILD === 'true'){
  basePath = '/';
}

module.exports = {
  title: '/misc', // …
  description: 'a place for miscellanea',
  base: basePath,
  ga: 'UA-53507706-3',
  serviceWorker: true,
  themeConfig: {
    repo: 'edm00se/misc',
    docsRepo: 'edm00se/misc',
    editLinks: false,

    // custom property to show links about you
    usefulLinks: [
      {
        href: 'https://twitter.com/edm00se',
        cssIcon: 'fa fa-fw fa-twitter',
        site: 'twitter'
      },
      {
        href: 'https://www.instagram.com/edm00se/',
        cssIcon: 'fa fa-fw fa-instagram',
        site: 'instagram'
      },
      {
        href: 'https://stackoverflow.com/cv/edm00se',
        cssIcon: 'fa fa-fw fa-stack-overflow',
        site: 'stackOverflow'
      },
      {
        href: 'https://github.com/edm00se',
        cssIcon: 'fa fa-fw fa-github',
        site: 'github'
      },
      {
        href: 'https://www.linkedin.com/in/emccormick',
        cssIcon: 'fa fa-fw fa-linkedin',
        site: 'linkedin'
      }
    ],

    // custom pages
    pages: [
      {
        title: 'about',
        href: 'about.html'
      }
    ]
  },

  head: [
    ['link', { rel: ['shortcut', 'icon'], href:'/ico/favicon.ico', type:'image/x-icon' }],
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'icon', href: '/ico/favicon-196x196.png', sizes: '196x196' }],
    ['link', { rel: 'icon', href: '/ico/favicon-96x96.png', sizes: '96x96' }],
    ['link', { rel: 'icon', href: '/ico/favicon-32x32.png', sizes: '32x32' }],
    ['link', { rel: 'icon', href: '/ico/favicon-16x16.png', sizes: '16x16' }],
    ['link', { rel: 'icon', href: '/ico/favicon-128.png', sizes: '128x128' }],
    ['link', { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/ico/apple-touch-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/ico/apple-touch-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/ico/apple-touch-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '/ico/apple-touch-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '/ico/apple-touch-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '/ico/apple-touch-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '/ico/apple-touch-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/ico/apple-touch-icon-152x152.png' }],
    ['meta', { name: 'application-name', content: '/misc' }],
    ['meta', { name: 'msapplication-TileColor', content: '#FFFFFF' }],
    ['meta', { name:'msapplication-TileImage', content:'/ico/mstile-144x144.png' }],
    ['meta', { name:'msapplication-square70x70logo', content:'/ico/mstile-70x70.png' }],
    ['meta', { name:'msapplication-square150x150logo', content:'/ico/mstile-150x150.png' }],
    ['meta', { name:'msapplication-wide310x150logo', content:'/ico/mstile-310x150.png' }],
    ['meta', { name:'msapplication-square310x310logo', content:'/ico/mstile-310x310.png' }]
  ],

  // This allows to install local loaders for the custom theme (eg: sass-loader, less-lodaer)
  chainWebpack: (config, isServer) => {
    config.resolveLoader
      .modules
      .add(path.resolve(__dirname, './node_modules'))
  }

}
