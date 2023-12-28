const navConf = require('./config/nav')

module.exports = {
    title: 'ShuangChenYue',
    // base: '/cmty256/',
    description: '满招损，谦受益',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    theme: 'vdoing',
    markdown: {
        lineNumbers: true, // 显示代码块的行号
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6']

    },
    base: '/',
    head: [
        ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/logo/白云.38zbldnhh180.jpg' }], // 网页选项卡的logo
        [
            'meta',
            {
                name: 'keywords',
                content: '专注于Cpp语言的旅行者'
            }
        ], [
            'meta',
            {
                name: 'description',
                content: 'Cpp旅行者'
            }
        ]
    ],
    themeConfig: {
        updateBar: { showToArticle: false },
        logo: 'https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/logo/白云.38zbldnhh180.jpg',
        //sidebar: 'structuring',
        sidebarDepth: 2,
        lastUpdated: '上次更新',
        nav: navConf,
        sidebar: {
            mode: 'structuring',
            collapsable: true, // 侧边栏是否可折叠
        },
        pageStyle: 'line',
        category: false,
        tag: false,
        archive: false,
        author: {
            name: '霜晨月'//必需
        },
        footer: {
            //页脚信息
            createYear: 2023,
            //博客创建年份
            copyrightInfo: '霜晨月',
            //博客版权信息，支持a标签
        },
        // bodyBgImg: '/img/banner.jpg',
        // titleBadgeIcons: ['/img/2.png',],
    },
    plugins: [
        [
            'one-click-copy',  // 一键复制插件
            {
                copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
                copyMessage: '复制成功', // default is 'Copied successfully!'
                toolTipMessage: '点击复制', // default is ''Copy to clipboard'
                duration: 300, // prompt message display time
            }
        ],
        ["cursor-effects"], // 星星点击特效
        [
            'vuepress-plugin-reading-time',
            {
                // 以下是插件的默认配置
                excludes: [],
                options: {}
            }
        ],
        ['fulltext-search'], // 全文搜索
        // [
        //     'vuepress-baidu-tongji',
        //     {
        //         hm: 'abcdefghijklmnopqrstuvwxyz123456'
        //     }
        // ],
        ["@vuepress/medium-zoom"],// 图片点击放大
        [
            "sitemap",
            {
                hostname: 'https://xiaose-code.github.io'
            },

        ],
        // 图片懒加载：https://github.com/tolking/vuepress-plugin-img-lazy
        // 可以使用命令 npm install -D vuepress-plugin-img-lazy 来下载
        ['img-lazy'],
        // [
        //     'vuepress-plugin-baidu-autopush',
        // ],
        [
            "feed",
            {
                canonical_base: 'https://xiaose-code.github.io',
                count: 10000,
                // 需要自动推送的文档目录
                posts_directories: [],
            },
        ],

    ],
}
