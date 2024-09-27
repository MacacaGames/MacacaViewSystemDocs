import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'en-US',

    title: 'View System',
    description: 'A highly flexible UI solution for Unity',
    
    base: '/MacacaViewSystemDocs/',

    theme: defaultTheme({
        logo: 'LogoV2.png',

        navbar: [ 
            {
                text: "Home",
                link: "/README.md",
                // icon: "lightbulb",
                // activeMatch: "^/guide/$",
            },
            {
                text: "Documentation",
                link: "/Introduction.md",
                // icon: "lightbulb",
                // activeMatch: "^/guide/$",
            }
        ],
        sidebar: [
            "Introduction",
            "Installation",
            "GettingStarted",
            "Fundamentals",
            "ViewElementTransition",
            "VisualEditor",
            "LifeCycle Hook and Injection",
            "HelpTools",
            "FAQ",
        ],
    }),

    bundler: viteBundler(),
})
