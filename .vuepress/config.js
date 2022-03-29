const sidebar = require("./siderbar.js");
module.exports = {
  title: "三月的风博客",
  description: "三月的风的博客",
  dest: "public",
  // "base": '/my_blog/',
  base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  plugins: [
    // "@vuepress-reco/vuepress-plugin-comments",
    "vuepress-plugin-meting",
  ],
  theme: "reco",
  themeConfig: {
    mode: "light",
    subSidebar: "auto",
    valineConfig: {
      appId: "h6i7vXvVEK37fFFwb1DtMJ6W-gzGzoHsz",
      appKey: "cYI3hypnGAI00CPuzhNfeY8Q",
    },
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/936425776",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar,
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "目录索引",
      },
      tag: {
        location: 3,
        text: "标签索引",
      },
    },
    logo: "/avatar.jpg",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "三月的风",
    authorAvatar: "/avatar.jpg",
    record: "xxxx",
    startYear: "2022",
  },
  markdown: {
    lineNumbers: true,
  },
};
