module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Testly',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Testly web version' },
      { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet' },
      { href: 'https://fonts.googleapis.com/css?family=Roboto:300,400', rel: 'stylesheet' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    css: [
      { src: 'material-design-lite/src/material-design-lite.scss', lang: 'scss' },
    ]
  },
  build: {
    vendor: [ 'material-design-lite/material.min.js' ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' }
}