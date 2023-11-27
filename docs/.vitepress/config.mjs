import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
base:'/',
port:3000,
lang: 'zh-CN',
  title: "一个VitePress空白网站",
  description: "一个VitePress空白网站，功能齐全开箱即用",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '教程', link: '/config' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
