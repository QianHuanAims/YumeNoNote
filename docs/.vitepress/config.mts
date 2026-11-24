import { defineConfig } from "../../node_modules/vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/YumeNoNote/",
    title: "YumeNotes",
    cleanUrls: false,
    themeConfig: {
        logo: "/assets/logo.ico",
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {
                text: "梦记",
                items: [
                    {
                        text: "C++ 笔记",
                        link: "/cpp/",
                    },
                    {
                        text: "数学笔记",
                        link: "/math/",
                    },
                ],
            },
        ],

        sidebar: {
            "/cpp/": [
                {
                    text: "C++",
                    items: [{ text: "Unit 1", link: "/cpp/" }],
                },
            ],
            "/math/": [
                {
                    text: "数学",
                    items: [{ text: "", link: "/math/" }],
                },
            ],
        },

        // socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
    },
});

