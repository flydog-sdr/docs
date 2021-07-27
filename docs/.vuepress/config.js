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
            description: 'FlyDog SDR 是一款衍生自 KiwiSDR，使用 16 位 ADC 采样的 SDR 产品。目前能在 Raspberry Pi 全系列上流畅使用，满足多种场景需求。',
        },
        '/en/': {
            lang: 'en',
            title: 'FlyDog SDR',
            description: 'FlyDog SDR: The 16-Bit ADC KiwiSDR derivation Wide-band SDR + GPS cape for Raspberry Pi.',
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
                label: '简中',
                ariaLabel: 'Select language',
                editLinkText: '前往 GitHub 编辑此页',
                lastUpdated: '上次更新',
                contributorsLabel: '贡献者',
                nav: [
                    {text: '快速开始', link: '/guide/requirements',},
                    {text: '使用手册', link: '/manual/connect',},
                    {text: '体验 Demo', link: '/#体验-demo'},
                    {text: '资源下载', link: 'https://d.sdrotg.com'},
                    {text: '面向开发者', link: '/developer/deploy',},
                ],
                sidebar: {
                    '/guide/': [
                        {
                            title: '准备事项',
                            collapsable: false,
                            children: [
                                'requirements',
                                'tools',
                            ],
                        },
                        {
                            title: '安装指南',
                            collapsable: false,
                            children: [
                                'install',
                                'antenna',
                                'noise',
                            ],
                        },
                        {
                            title: '运行 FlyDog SDR',
                            collapsable: false,
                            children: [
                                'initialisation',
                                'breakdown',
                            ],
                        },
                        {
                            title: '质保和售后',
                            collapsable: false,
                            children: [
                                'after-sale',
                                'bug',
                            ],
                        },
                    ],
                    '/manual/': [
                        {
                            title: '操作指南',
                            collapsable: false,
                            children: [
                                'connect',
                                'freq',
                                'dashboard',
                            ]
                        },
                        {
                            title: '设定 FlyDog SDR',
                            collapsable: false,
                            children: [
                                'admin',
                                'public',
                                'update',
                                'map',                              
                            ]
                        }
                    ],
                    '/developer/': [
                        {
                            title: '构建 FlyDog SDR',
                            collapsable: false,
                            children: [
                                'deploy',
                                'docker',
                                'raspbian',
                                'fpga',
                                'reverse',
                            ]
                        },
                        {
                            title: 'FlyDog SDR 硬件',
                            collapsable: false,
                            children: [
                                'sensitivity',                          
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
                    {text: 'User Manual', link: '/en/manual/connect',},
                    {text: 'Experience Demos', link: '/en/#experience-the-demo'},
                    {text: 'Downloads', link: 'https://d.sdrotg.com'},
                    {text: 'For Developers', link: '/en/developer/deploy',},
                ],
                sidebar: {
                    '/en/guide/': [
                        {
                            title: 'Preparations',
                            collapsable: false,
                            children: [
                                'requirements',
                                'tools',
                            ],
                        },
                        {
                            title: 'Installation',
                            collapsable: false,
                            children: [
                                'install',
                                'antenna',
                                'noise',
                            ],
                        },
                        {
                            title: 'Launch FlyDog SDR',
                            collapsable: false,
                            children: [
                                'initialisation',
                                'breakdown',
                            ],
                        },
                        {
                            title: 'After Sale Services',
                            collapsable: false,
                            children: [
                                'after-sale',
                                'bug',
                            ],
                        },
                    ],
                    '/en/manual/': [
                        {
                            title: 'Operation Manual',
                            collapsable: false,
                            children: [
                                'connect',
                                'freq',
                                'dashboard',
                            ]
                        },
                        {
                            title: 'Admin FlyDog SDR',
                            collapsable: false,
                            children: [
                                'admin',
                                'public',
                                'update',
                                'map',  
                            ]
                        }
                    ],
                    '/en/developer/': [
                        {
                            title: 'Build FlyDog SDR',
                            collapsable: false,
                            children: [
                                'deploy',
                                'docker',
                                'raspbian',
                                'fpga',
                                'reverse',
                            ]
                        },
                        {
                            title: 'FlyDog SDR Hardware',
                            collapsable: false,
                            children: [
                                'sensitivity',                          
                            ]
                        }
                    ],
                    '/en/': 'auto',
                },
            },
        },
    },
}
