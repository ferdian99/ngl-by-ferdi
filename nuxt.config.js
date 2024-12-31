export default {
  head: {
    title: "NGL by @haloferdi",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      {
        hid: "description",
        name: "description",
        content:
          "Hi, kirim saran dan kritik terbaikmu untuk saya yang lebih baik!",
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      }
    ]
  },

  target: "static",

  ssr: false,

  router: {
    base: "/v2",
  },

  css: ["@/assets/css/tailwind.css"],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
