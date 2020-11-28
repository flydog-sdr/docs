module.exports = {
    head: [
        ["link", {rel: "apple-touch-icon", size: "180x180", href: "/apple-touch-icon.png"}],
        ["link", {rel: "icon", type: "image/png", size: "32x32", href: "/favicon-32x32.png"}],
        ["link", {rel: "icon", type: "image/png", size: "16x16", href: "/favicon-16x16.png"}],
        ["link", {rel: "manifest", href: "/site.webmanifest"}],
        ["meta", {name: "viewport", content: "width=device-width,initial-scale=1.0"}],
        ["meta", {name: "apple-mobile-web-app-title", content: "FlyDog SDR Project "}],
        ["meta", {name: "application-name", content: "FlyDog SDR Project"}],
    ],
    plugins: [
        '@vuepress/back-to-top',
        '@kidonng/vuepress-plugin-contributors'
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'FlyDog SDR',
            description: 'FlyDog SDR 是一款衍生于 KiwiSDR，能运行在 Raspberry Pi、Orange Pi 等多种 ARM 架构开发板的 16 位 ADC 采样的高宽带 SDR',
        },
        '/en/': {
            lang: 'en',
            title: 'FlyDog SDR',
            description: 'The 16-Bit ADC KiwiSDR derivation Wide-band SDR + GPS cape for Raspberry Pi, Orange Pi...',
        }
    },
    themeConfig: {
        repo: 'flydog-sdr',
        docsRepo: 'flydog-sdr/docs',
        logo: '/flydog-sdr.png',
        smoothScroll: true,
        docsDir: 'docs',
        editLinks: true,
        search: false,
        locales: {
            '/': {
                selectText: 'Languages',
                label: '简体中文',
                ariaLabel: 'Select language',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                contributorsLabel: '贡献者',
                nav: [
                    {text: '快速开始', link: '/guide/requirements',},
                    {text: '使用手册', link: '/manual/overview',},
                    {text: '进阶需求', link: '/advanced/tools'},
                ],
                sidebar: {
                    '/guide/': [
                        {
                            title: '快速开始',
                            collapsable: false,
                            children: [
                                'requirements',
                                'tools',
                            ],
                        },
                        {
                            title: '组装指北',
                            collapsable: false,
                            children: [
                                'raspberrypi',
                            ],
                        },
                        {
                            title: '安全使用',
                            collapsable: false,
                            children: [
                                'cooling',
                                'fan',
                            ],
                        },
                    ],
                    '/manual/': [
                        {
                            title: '',
                            collapsable: false,
                            children: [
                            ]
                        },
                        {
                            title: '',
                            collapsable: false,
                            children: [
                            ]
                        }
                    ],
                    '/': 'auto',
                },
            },
            '/en/': {
                label: 'English',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: [
                    {text: 'Quick Start', link: '/en/guide/requirements',},
                    {text: 'User Manual', link: '/en/manual/overview',},
                    {text: 'Advanced operations', link: '/en/advanced/tools'},
                ],
            },
        },
    },
}
