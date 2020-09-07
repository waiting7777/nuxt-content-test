import theme from '@nuxt/content-theme-docs'

export default theme({
  i18n: {
    locales: () => [
        {
          code: 'zh-cn',
          iso: 'zh-cn',
          file: 'zh-cn.js',
          name: '中文'
        }, 
        {
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js',
          name: 'English'
        }
      ],
      defaultLocale: 'en'
    }
})
