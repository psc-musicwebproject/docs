import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PSC-MusicWeb Project",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'assets/logo.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        description: "Web Application and IoT Solution at PSC Music Studio at Pongsawadi Technological College",
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
        footer: {
          message: 'Part of the academic requirement for the Higher Vocational Certificate Program at Pongsawadi Technological College, in area of Information and Communication, majoring in Computer Technology.',
          copyright: 'Copyright © 2025-present PSC-MusicWeb Project Authors with association and copyright of Pongsawadi Technological College'
        }
      }
    },
    th: {
      label: 'ภาษาไทย',
      lang: 'th',
      themeConfig: {
        description: "Web Application and IoT Solution at PSC Music Studio at Pongsawadi Technological College",
        nav: [
          { text: 'หน้าหลัก', link: '/th/' },
          { text: 'ตัวอย่าง', link: '/th/docs/markdown-examples' }
        ],

        sidebar: [
          {
            text: 'ตัวอย่าง',
            items: [
              { text: 'ตัวอย่างการใช้ Markdown', link: '/th/docs/markdown-examples' },
              { text: 'Runtime API Examples', link: '/th/docs/api-examples' }
            ]
          }
        ],
        footer: {
          message: 'เป็นส่วนหนึ่งของการศีกษาตามหลักสูตรประกาศนียบัตรวิชาชีพชั้นสูง ประเภทวิชาเทคโนโลยีสารสนเทศ และการสื่อสาร สาขาวิชาเทคโนโลยีสารสนเทศ สาขางนนักบริหารจัดการระบบเครือข่ายคอมพิวเตอร์และความปลอดภัย',
          copyright: 'ลิขสิทธิ์ © 2568-ปัจจุบัน เจ้าของโครงงาน PSC-MusicWeb ร่วมกับ วิทยาลัยเทคโนโลยีพงษ์สวัสดิ์'
        }
      }
    }
  }
})
