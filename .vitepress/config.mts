import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PSC-MusicWeb Project",
  description: "Web Application and IoT Solution at PSC Music Studio at Pongsawadi Technological College",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'assets/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/docs/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/docs/markdown-examples' },
          { text: 'Runtime API Examples', link: '/docs/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Part of the academic requirement for the Higher Vocational Certificate Program at Pongsawadi Technological College, in area of Information and Communication, majoring in Computer Technology.',
      copyright: 'Copyright © 2025-present PSC-MusicWeb Project Authors with association and copyright of Pongsawadi Technological College'
    }
  }
})
