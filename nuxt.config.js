module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Testly',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Testly web version' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://code.getmdl.io/1.3.0/material.indigo-pink.min.css' }
    ],
    script: [
      { src: 'https://code.getmdl.io/1.3.0/material.min.js', defer: true },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' }
}