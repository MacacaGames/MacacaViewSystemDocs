import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'en-US',

    title: 'VuePress',
    description: 'My first VuePress Site',
    
    base: '/MacacaViewSystemDocs/',

    theme: defaultTheme({
        logo: 'https://vuejs.press/images/hero.png',

        navbar: ['/', '/get-started'],
        sidebar: [
            // SidebarItem
            {
                text: 'Concept',
                prefix: 'Concept',
                link: 'Concept/ViewElement.md',
                collapsible: false,
            },
            {
                text: 'AllContent',
                prefix: 'AllContent',
                link: '/AllContent.md',
                collapsible: false,
            },
            "Introduction",
            "Installation",
        ],
    }),

    bundler: viteBundler(),
})
