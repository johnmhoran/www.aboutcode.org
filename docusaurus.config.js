import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const getDeploymentTimestamp = () => {
    const now = new Date();
    const date = now.toISOString().split('T')[0]; // 2025-09-13
    const time = now.toISOString().split('T')[1].split('.')[0]; // 23:45:32
    const weekday = now.toLocaleDateString('en-US', { weekday: 'long' });
    return `${date} ${time} UTC`;
};

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'AboutCode',
    tagline: '[Tagline . . . ?]',
    // favicon: 'img/favicon.ico',
    favicon: 'img/favicon-test.ico',

    markdown: {
        format: 'detect', // Auto-detects: .md = plain Markdown (CommonMark), .mdx = MDX
    },

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url
    // url: "https://aboutcode.github.io/",

    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    // baseUrl: "/www.aboutcode.org/",

    //   For the fork:
    url: 'https://johnmhoran.github.io',
    baseUrl: '/www.aboutcode.org/',

    // GitHub pages deployment config. -- production
    // organizationName: "AboutCode",
    // projectName: "www.aboutcode.org",

    // GitHub pages deployment config. -- fork
    organizationName: 'johnmhoran',
    projectName: 'www.aboutcode.org',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: 'docs',
                    // sidebarPath: './sidebars.js',
                    sidebarPath: require.resolve('./sidebars.js'),

                    // TODO 2025-12-03 Wednesday 17:44:25.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    editUrl: ({ docPath }) => {
                        // TODO We can include a map here as in packageurl.org.
                        // Otherwise, provide a default (so “Edit this page” still works)
                        // return `https://github.com/aboutcode/www.aboutcode.org/blob/main/website/docs/${docPath}`;
                        // fork:
                        return `https://github.com/johnmhoran/www.aboutcode.org/blob/main/website/docs/${docPath}`;
                    },
                },
                // blog: {
                //     showReadingTime: true,
                //     feedOptions: {
                //         type: ['rss', 'atom'],
                //         xslt: true,
                //     },
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     editUrl:
                //         'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                //     // Useful options to enforce blogging best practices
                //     onInlineTags: 'warn',
                //     onInlineAuthors: 'warn',
                //     onUntruncatedBlogPosts: 'warn',
                // },
                theme: {
                    // customCss: './src/css/custom.css',
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            // image: 'img/docusaurus-social-card.jpg',
            // colorMode: {
            //     respectPrefersColorScheme: true,
            // },
            navbar: {
                // title: 'My Site',
                logo: {
                    alt: 'www.aboutcode.org Logo',
                    src: 'img/no_logo_placeholder.svg',
                },
                style: "dark",
                items: [
                    { to: '/', label: 'Home', position: 'left', exact: true },
                    {
                        type: 'docSidebar',
                        sidebarId: 'scancode',
                        position: 'left',
                        label: 'ScanCode',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'vulnerablecode',
                        position: 'left',
                        label: 'VulnerableCode',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'purldb',
                        position: 'left',
                        label: 'PURL-DB',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'dejacode',
                        position: 'left',
                        label: 'DejaCode',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'about',
                        position: 'left',
                        label: 'About',
                    },

                    // {
                    //     type: 'docSidebar',
                    //     sidebarId: 'tutorialSidebar',
                    //     position: 'left',
                    //     label: 'Tutorial',
                    // },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    // {
                    //     href: 'https://github.com/facebook/docusaurus',
                    //     label: 'GitHub',
                    //     position: 'right',
                    // },
                    {
                        href: '#',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        href: '#',
                        label: 'Slack',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'X',
                                href: 'https://x.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
