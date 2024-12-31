export default {

  head: {
    title: 'NGL by @haloferdi',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Hi, kirim saran dan kritik terbaikmu untuk saya yang lebih baik!'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      }
    ]
  },

  target: 'static',
  
  ssr: false,

  css: [
    '@/assets/css/tailwind.css'
  ],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  }
}
