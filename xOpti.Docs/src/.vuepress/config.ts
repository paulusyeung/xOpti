import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "xOpti",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "眼鏡.舖",
      description: "vuepress-theme-hope 的文档演示",
    },
    "/hk/": {
      lang: "zh-TW",    //隻 vuepress-theme-hope 啲 plugins 唔 support zh-HK，唯有借用 zh-TW
      title: "眼鏡.舖",
      description: "vuepress-theme-hope 的文档演示",
    },
  },

  theme,

  shouldPrefetch: false,
});
